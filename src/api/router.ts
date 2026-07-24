import { statusAPI } from "./status";
import { dashboard } from "../views/dashboard";

export function router(path: string) {

  if (path === "/api/status") {
    return statusAPI();
  }

  if (path === "/panel") {
    return new Response(
      dashboard(),
      {
        headers: {
          "content-type": "text/html;charset=UTF-8"
        }
      }
    );
  }

  return null;
}
