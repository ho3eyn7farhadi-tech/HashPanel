export interface TelegramConfig {
token:string;
chatId:string;
}


export function sendConfigMessage(
config:string
){

return {
ok:true,
message:
`Your config:\n${config}`
};

}
