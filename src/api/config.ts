import { generateConfig } from "../services/configManager";

export async function configAPI(request:Request){

let data:any={};

if(request.method==="POST"){
data=Object.fromEntries(await request.formData());
}


return new Response(
JSON.stringify(
generateConfig(data),
null,
2
),
{
headers:{
"content-type":"application/json"
}
}
);

}
