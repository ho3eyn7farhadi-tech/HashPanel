import { sendConfigMessage } from "../telegram/bot";


export function telegramAPI(){

return new Response(
JSON.stringify(
sendConfigMessage(
"vless://demo"
)
),
{
headers:{
"content-type":"application/json"
}
}
);

}
