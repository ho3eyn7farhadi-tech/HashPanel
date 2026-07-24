import { createSubscription } from "../subscription/builder";

export function subscriptionAPI(){

  const result = createSubscription(
    "hash-demo",
    [
      {
        name:"User-1",
        url:"vless://example"
      }
    ]
  );

  return new Response(
    JSON.stringify(result),
    {
      headers:{
        "content-type":"application/json"
      }
    }
  );
}
