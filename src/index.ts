import { Server } from "./server";
import { get } from "config";

const _server = new Server();
const PORT: number = get("app.port");
const ENV: string = get("app.env");

_server.listen(PORT, ENV);
