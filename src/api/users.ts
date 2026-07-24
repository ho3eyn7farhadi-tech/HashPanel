import { createUser } from "../database/users";

export async function usersAPI(request:Request){

if(request.method==="POST"){

 const body:any = Object.fromEntries(
  await request.formData()
 );

 const user=createUser(
  body.username,
  Number(body.volume),
  Number(body.days)
 );

 return new Response(
 JSON.stringify({
  success:true,
  user
 }),
 {
 headers:{
 "content-type":"application/json"
 }
 });

}


return new Response(
JSON.stringify({
users:[]
}),
{
headers:{
"content-type":"application/json"
}
});

}
