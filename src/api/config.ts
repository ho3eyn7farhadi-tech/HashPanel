import { createVLESS } from "../config/generator";

export function configAPI(){

  const result = createVLESS({
    name: "Hash User",
    server: "example.com",
    port: 443,
    expireDays: 30,
    volumeGB: 50
  });

  return new Response(
    JSON.stringify(result),
    {
      headers:{
        "content-type":"application/json"
      }
    }
  );
}
