import { json } from "../core/response";

export function statusAPI() {
  return json({
    status: "online",
    service: "HashPanel API",
    version: "0.1.0"
  });
}
