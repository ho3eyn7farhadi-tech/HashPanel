export interface User {
 id:number;
 username:string;
 volume:number;
 expire_days:number;
}

export function createUser(username:string,volume:number,days:number){
 return {
  username,
  volume,
  expire_days:days
 };
}
