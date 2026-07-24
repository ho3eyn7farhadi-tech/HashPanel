import crypto from "crypto";

export function generateUUID() {
  return crypto.randomUUID();
}

export function createVLESS(data:{
name:string;
server:string;
port:number;
}){

const uuid=generateUUID();

return{
type:"vless",
name:data.name,
uuid,
link:`vless://${uuid}@${data.server}:${data.port}?encryption=none&security=tls&type=ws#${encodeURIComponent(data.name)}`
};

}
