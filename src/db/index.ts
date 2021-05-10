import { connect } from "mongoose";
import { get } from "config";

export class DatabaseConnection {
  public connect() {
    const MONGO_DB_USER = get("db.user");
    const MONGO_DB_PASS = get("db.password");
    const MONGO_DB_DATABASE = get("db.database");

    connect(
      `mongodb+srv://${MONGO_DB_USER}:${MONGO_DB_PASS}@bex-cart.wpipt.mongodb.net/${MONGO_DB_DATABASE}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      }
    ).then(() => {
      console.log("database connected");
    });
  }
}
