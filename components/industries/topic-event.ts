// A tiny cross-component channel: trigger cards, the readiness check and the
// sticky bar announce a topic, and the lead form preselects it. A window event
// rather than React context because the senders are scattered server-rendered
// islands with no common client parent.

export const TOPIC_EVENT = "mp:industry-topic";

export function announceTopic(topic: string) {
  window.dispatchEvent(new CustomEvent<string>(TOPIC_EVENT, { detail: topic }));
}
