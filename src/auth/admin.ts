export interface Admin {
  id: number;
  username: string;
}

export function checkAdmin(username:string,password:string){
  return {
    success: username.length > 0 && password.length > 0
  };
}
