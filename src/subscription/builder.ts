import type { SubscriptionItem } from "./types";

export function createSubscription(
  id: string,
  items: SubscriptionItem[]
) {

  const content = items
    .map(item => item.url)
    .join("\n");

  return {
    id,
    url: `/sub/${id}`,
    content: btoa(content)
  };
}
