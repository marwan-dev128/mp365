// A tiny cross-component channel: trigger cards announce a topic, and the lead
// form preselects it. A window event rather than React context because the
// senders are scattered islands with no common client parent.

export const TOPIC_EVENT = "mp:industry-topic";
export const CONSULT_ANCHOR = "consult";

export function announceTopic(topic: string) {
  window.dispatchEvent(new CustomEvent<string>(TOPIC_EVENT, { detail: topic }));
}
