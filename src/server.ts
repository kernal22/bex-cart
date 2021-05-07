import express, { Application } from "express";
import cors from "cors";
import helmet from "helmet";
import { join } from "path";
import apiRouter from "./routes/index";
import { DatabaseConnection } from "./db/index";

export class Server {
  private _app: Application;

  constructor() {
    this._app = express();
    this.initializeServer();
  }

  private initializeServer() {
    this._app.use(cors());
    this._app.use(helmet());
    this._app.use(express.json());
    this._app.use(express.urlencoded({ extended: true, limit: "5mb" }));
    this._app.use("/public", express.static(join(__dirname, "uploads")));
    this._app.use("/api", apiRouter);
    let _db: DatabaseConnection = new DatabaseConnection();
    _db.connect();
  }

  public listen(port: number, env: string) {
    this._app.listen(port, () => {
      console.log(`Server is running on port: ${port} in ${env} mode`);
    });
  }
}
