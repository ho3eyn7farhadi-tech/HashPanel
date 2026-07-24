import crypto from "crypto";

export function createTrojan(data:{
name:string;
server:string;
port:number;
}){

const password=crypto.randomBytes(16).toString("hex");

return{
type:"trojan",
password,
link:`trojan://${password}@${data.server}:${data.port}#${encodeURIComponent(data.name)}`
};

}
