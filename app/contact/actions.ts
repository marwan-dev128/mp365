"use server";

import { prisma } from "@/lib/db";

export type ContactState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string; fieldErrors?: Record<string, string> };

// Deliberately permissive: this only rejects strings that clearly cannot be
// an address. Over-strict email regexes reject valid addresses, and the real
// verification is that the person replies.
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const LIMITS = {
  name: 120,
  email: 254,
  company: 200,
  message: 5000,
  industry: 64,
  topic: 160,
  sourcePath: 300,
} as const;

// Only canonical site paths and slugs are stored; anything else is dropped
// rather than trusted, since these arrive from hidden inputs the client controls.
const SITE_PATH = /^\/[a-z0-9\-/]*\/$/;
const SLUG = /^[a-z0-9-]+$/;

function clean(value: FormDataEntryValue | null, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function submitContact(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  // Honeypot: a field hidden from humans via CSS. Bots fill everything, so a
  // non-empty value means automated submission. Return success so the bot
  // sees no signal worth adapting to, but persist nothing.
  if (clean(formData.get("website"), 100)) {
    return { status: "success" };
  }

  const name = clean(formData.get("name"), LIMITS.name);
  const email = clean(formData.get("email"), LIMITS.email);
  const company = clean(formData.get("company"), LIMITS.company);
  const rawMessage = clean(formData.get("message"), LIMITS.message);
  const topic = clean(formData.get("topic"), LIMITS.topic);
  const industryRaw = clean(formData.get("industry"), LIMITS.industry);
  const sourcePathRaw = clean(formData.get("sourcePath"), LIMITS.sourcePath);
  const industry = SLUG.test(industryRaw) ? industryRaw : "";
  const sourcePath = SITE_PATH.test(sourcePathRaw) ? sourcePathRaw : "";
  // Industry forms make the free-text box optional: the topic select already
  // says what the enquiry is about, and every extra required field costs leads.
  const message = rawMessage || (topic ? `Topic: ${topic}` : "");

  const fieldErrors: Record<string, string> = {};
  if (!name) fieldErrors.name = "Please tell us your name.";
  if (!email) fieldErrors.email = "Please add an email so we can reply.";
  else if (!EMAIL.test(email)) fieldErrors.email = "That doesn't look like a valid email address.";
  if (!message) fieldErrors.message = "Let us know what you're working on.";

  if (Object.keys(fieldErrors).length) {
    return { status: "error", message: "Please check the highlighted fields.", fieldErrors };
  }

  let submissionId: string;
  try {
    const saved = await prisma.contactSubmission.create({
      data: {
        name,
        email,
        company: company || null,
        message,
        industry: industry || null,
        topic: topic || null,
        sourcePath: sourcePath || null,
      },
      select: { id: true },
    });
    submissionId = saved.id;
  } catch (error) {
    console.error("[contact] failed to persist submission", error);
    return {
      status: "error",
      message:
        "Something went wrong on our end and your message wasn't saved. Please email info@mp-365.com directly.",
    };
  }

  // Store-then-forward: the enquiry is already durable, so a webhook failure
  // degrades to "not yet forwarded" rather than a lost lead. Configure
  // CONTACT_WEBHOOK_URL (Teams/Slack/CRM) to enable notifications.
  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: [
            `New MP365 enquiry from ${name}${company ? ` (${company})` : ""} <${email}>`,
            ...(industry ? [`Industry: ${industry}`] : []),
            ...(topic ? [`Topic: ${topic}`] : []),
            ...(sourcePath ? [`Page: ${sourcePath}`] : []),
            "",
            message,
          ].join("\n"),
          industry: industry || null,
          topic: topic || null,
          sourcePath: sourcePath || null,
          submissionId,
        }),
        signal: AbortSignal.timeout(8000),
      });
      if (res.ok) {
        await prisma.contactSubmission.update({
          where: { id: submissionId },
          data: { forwardedAt: new Date() },
        });
      } else {
        console.error(`[contact] webhook returned ${res.status} for ${submissionId}`);
      }
    } catch (error) {
      console.error(`[contact] webhook failed for ${submissionId}`, error);
    }
  }

  return { status: "success" };
}
