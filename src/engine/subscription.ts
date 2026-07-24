import {createVLESS} from "./vless";
import {createTrojan} from "./trojan";

export function createSubscription(){

const v=createVLESS({
name:"HashUser",
server:"example.com",
port:443
});

const t=createTrojan({
name:"HashUser",
server:"example.com",
port:443
});

return Buffer.from(
[
v.link,
t.link
].join("\n")
).toString("base64");

}
