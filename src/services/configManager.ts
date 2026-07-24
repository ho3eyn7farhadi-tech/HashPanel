import { createVLESS } from "../config/generator";

export function generateConfig(data:any){

return createVLESS({

name:data.name || "User",

server:data.server || "example.com",

port:Number(data.port)||443,

expireDays:Number(data.days)||30,

volumeGB:Number(data.volume)||50

});

}
