import { connect } from "mongoose";
import { get } from "config";

export class DatabaseConnection {
  public connect() {
    const MONGO_DB_USER = get("db.user");
    const MONGO_DB_PASS = get("db.password");
    const MONGO_DB_DATABASE = get("db.database");
    const MONGO_DB_HOST = get("db.host");
    // const URI = `mongodb+srv://${MONGO_DB_USER}:${MONGO_DB_PASS}@bex-cart.wpipt.mongodb.net/${MONGO_DB_DATABASE}`;
    const URI = `mongodb://${MONGO_DB_USER}:${MONGO_DB_PASS}@${MONGO_DB_HOST}/${MONGO_DB_DATABASE}`;

    connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
      .then(() => {
        console.log("database connected");
      })
      .catch((error) => {
        console.log("DB failed, trying to reconnect, wait...");
        connect(URI);
      });
  }
}
