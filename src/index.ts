import { router } from "./api/router";
import type { Env } from "./types/env";

export default {
  async fetch(
    request: Request,
    env: Env
  ): Promise<Response> {

    const url = new URL(request.url);

    const apiResponse = await router(url.pathname, request);

    if (apiResponse) {
      return apiResponse;
    }

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

    return new Response(
      "HashPanel API Not Found",
      {
        status: 404
      }
    );
  }
};
