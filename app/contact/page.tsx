import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { JsonLd } from "@/components/JsonLd";
import { ContactForm } from "@/components/ContactForm";
import { buildMetadata } from "@/lib/metadata";
import { getSiteSettings } from "@/lib/data";
import { webPageSchema, ORG_ID } from "@/lib/schema";

export const revalidate = 3600;

export const metadata = buildMetadata({
  title: "Contact MP365",
  description: "Get in touch with MP365 for a free Microsoft consulting consultation — Microsoft 365 migration, Dynamics 365, and Power Platform.",
  path: "/contact/",
  isFullTitle: true,
});

export default async function ContactPage() {
  const settings = await getSiteSettings();
  return (
    <>
      <JsonLd
        data={webPageSchema({
          type: "ContactPage",
          path: "/contact/",
          name: `Contact ${settings.brandName}`,
          description:
            "Get in touch with MP365 for a free Microsoft consulting consultation — Microsoft 365 migration, Dynamics 365, and Power Platform.",
          mainEntityId: ORG_ID,
        })}
      />
      {/* Attaches a typed contactPoint to the existing #organization node
          rather than restating the whole organization. */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": ORG_ID,
          contactPoint: [
            {
              "@type": "ContactPoint",
              contactType: "sales",
              telephone: settings.phone,
              email: settings.email,
              areaServed: settings.areaServed,
              availableLanguage: "English",
            },
          ],
        }}
      />
      <PageHero
        eyebrow="Contact"
        h1="Tell us what you're working with"
        breadcrumbs={[{ name: "Contact", path: "/contact/" }]}
      />
      <Container className="pt-14">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] max-w-4xl mx-auto">
          <div>
            <p className="text-ink-2 leading-relaxed mb-8 max-w-[50ch]">
              Whether it&rsquo;s an M&amp;A tenant migration on a deadline, a Dynamics 365 implementation, or
              a Power Platform environment that&rsquo;s grown past its governance model — tell us the
              situation and we&rsquo;ll respond with real next steps.
            </p>
            <dl className="flex flex-col gap-5 text-sm">
              <div>
                <dt className="font-bold text-ink">Phone</dt>
                <dd>
                  <a href={`tel:${settings.phone}`} className="text-azure hover:underline">
                    {settings.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-bold text-ink">Email</dt>
                <dd>
                  <a href={`mailto:${settings.email}`} className="text-azure hover:underline">
                    {settings.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-bold text-ink">Address</dt>
                <dd className="text-ink-2">
                  {settings.street}
                  <br />
                  {settings.city}, {settings.region} {settings.postalCode}
                </dd>
              </div>
              {settings.sameAs[0] && (
                <div>
                  <dt className="font-bold text-ink">LinkedIn</dt>
                  <dd>
                    <a href={settings.sameAs[0]} className="text-azure hover:underline" target="_blank" rel="noopener noreferrer">
                      linkedin.com/company/mp-365
                    </a>
                  </dd>
                </div>
              )}
            </dl>
          </div>

          {/*
            Submits to the `submitContact` server action (app/contact/actions.ts):
            validates, persists to ContactSubmission, then optionally forwards to
            CONTACT_WEBHOOK_URL. Store-then-forward, so a webhook outage can't
            lose an enquiry.
          */}
          <ContactForm email={settings.email} />
        </div>
      </Container>
    </>
  );
}
