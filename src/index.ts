export interface Env {
  APP_NAME: string;
}

export default {
  async fetch(
    request: Request,
    env: Env
  ): Promise<Response> {

    const url = new URL(request.url);

    if (url.pathname === "/") {
      return new Response(
        JSON.stringify({
          name: env.APP_NAME,
          status: "online",
          version: "0.1.0"
        }),
        {
          headers: {
            "content-type": "application/json"
          }
        }
      );
    }

    return new Response("HashPanel API Not Found", {
      status: 404
    });
  }
};
