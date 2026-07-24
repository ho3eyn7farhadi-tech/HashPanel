import { statusAPI } from "./status";
import { adminPanel } from "../views/admin/panel";
import { configAPI } from "./config";
import { subscriptionAPI } from "./subscription";
import { telegramAPI } from "./telegram";


export async function router(
path:string,
request:Request
){


if(path==="/api/status")
return statusAPI();


if(path==="/api/config/create")
return configAPI(request);


if(path==="/api/subscription/create")
return subscriptionAPI();


if(path==="/api/telegram/test")
return telegramAPI();


if(path==="/panel")
return new Response(adminPanel(),{
headers:{
"content-type":"text/html;charset=UTF-8"
}
});


return null;

}
