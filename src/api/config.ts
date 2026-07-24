import { createVLESS } from "../config/generator";

export async function configAPI(request:Request){

let body:any={};

if(request.method==="POST"){
 body=Object.fromEntries(
   await request.formData()
 );
}


const result=createVLESS({

name:body.name || "Hash User",

server:"example.com",

port:443,

expireDays:Number(body.days)||30,

volumeGB:Number(body.volume)||50

});


return new Response(
JSON.stringify(result,null,2),
{
headers:{
"content-type":"application/json"
}
}
);

}
