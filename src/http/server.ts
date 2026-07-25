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
