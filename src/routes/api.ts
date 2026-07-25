import { Router } from "../http/server";

export const api = new Router();

api.get("/api/status", async () => {
  return Response.json({
    name: "HashPanel",
    version: "0.2.0",
    status: "online"
  });
});
