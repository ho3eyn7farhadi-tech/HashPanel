import { statusAPI } from "./status";
import { adminPanel } from "../views/admin/panel";
import { configAPI } from "./config";
import { subscriptionAPI } from "./subscription";
import { usersAPI } from "./users";


export async function router(
path:string,
request:Request
){

if(path==="/api/status")
 return statusAPI();


if(path==="/api/users")
 return usersAPI(request);


if(path==="/api/config/create")
 return configAPI(request);


if(path==="/api/subscription/create")
 return subscriptionAPI();


if(path==="/panel")
 return new Response(adminPanel(),{
 headers:{
 "content-type":"text/html;charset=UTF-8"
 }
});


return null;

}
