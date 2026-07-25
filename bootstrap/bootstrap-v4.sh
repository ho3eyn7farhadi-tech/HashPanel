#!/data/data/com.termux/files/usr/bin/bash
set -e

echo "========== HashPanel Bootstrap v4 =========="

mkdir -p \
src/http \
src/services \
src/database \
src/middleware \
src/controllers \
src/models \
src/routes

cat > src/http/server.ts <<'EOT'
export interface Context {
  request: Request;
  params: Record<string,string>;
}

export type Handler = (ctx: Context) => Promise<Response>;

export class Router {
  private routes = new Map<string, Handler>();

  get(path: string, handler: Handler) {
    this.routes.set("GET " + path, handler);
  }

  async handle(request: Request): Promise<Response> {
    const url = new URL(request.url);
    const key = request.method + " " + url.pathname;

    const handler = this.routes.get(key);

    if (!handler) {
      return new Response("Not Found", { status: 404 });
    }

    return handler({
      request,
      params: {}
    });
  }
}
EOT

cat > src/routes/api.ts <<'EOT'
import { Router } from "../http/server";

export const api = new Router();

api.get("/api/status", async () => {
  return Response.json({
    name: "HashPanel",
    version: "0.2.0",
    status: "online"
  });
});
EOT

cat > src/database/db.ts <<'EOT'
export interface User {
  id: string;
  username: string;
  role: "admin" | "user";
}

export const users: User[] = [];
EOT

echo "[✓] Core API ready"
