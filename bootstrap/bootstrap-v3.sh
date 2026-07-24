#!/data/data/com.termux/files/usr/bin/bash
set -e

echo "========== HashPanel Bootstrap v3 =========="

cat > src/engine/vless.ts <<'EOT'
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
EOT

cat > src/engine/trojan.ts <<'EOT'
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
EOT

cat > src/engine/subscription.ts <<'EOT'
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
EOT

echo "[✓] Engine Ready"
