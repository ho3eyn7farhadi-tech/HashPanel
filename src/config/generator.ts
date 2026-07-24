import { generateUUID } from "../utils/uuid";

export interface ConfigOptions {
  name: string;
  server: string;
  port: number;
  expireDays: number;
  volumeGB: number;
}

export function createVLESS(options: ConfigOptions) {

  const uuid = generateUUID();

  const config = {
    id: uuid,
    name: options.name,
    protocol: "vless",
    server: options.server,
    port: options.port,
    expireDays: options.expireDays,
    volumeGB: options.volumeGB
  };

  const link =
    `vless://${uuid}@${options.server}:${options.port}?security=tls&type=ws#${encodeURIComponent(options.name)}`;

  return {
    config,
    link
  };
}
