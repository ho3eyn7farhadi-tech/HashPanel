export interface SubscriptionItem {
  name: string;
  url: string;
}

export interface Subscription {
  id: string;
  items: SubscriptionItem[];
}
