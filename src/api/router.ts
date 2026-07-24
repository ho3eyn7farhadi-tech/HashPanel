import { statusAPI } from "./status";
import { dashboard } from "../views/dashboard";
import { configAPI } from "./config";
import { subscriptionAPI } from "./subscription";

export function router(path:string){

  if(path === "/api/status"){
    return statusAPI();
  }

  if(path === "/api/config/create"){
    return configAPI();
  }

  if(path === "/api/subscription/create"){
    return subscriptionAPI();
  }

  if(path === "/panel"){
    return new Response(dashboard(),{
      headers:{
        "content-type":"text/html;charset=UTF-8"
      }
    });
  }

  return null;
}
