import { statusAPI } from "./status";

export function router(path: string) {

  if (path === "/api/status") {
    return statusAPI();
  }

  return null;
}
