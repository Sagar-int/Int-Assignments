import Promise from "bluebird";
import Config from "./config";
import * as pgPromise from "pg-promise";

const initOptions = {
  promiceLib: Promise,
  query(e) {
    console.log(e.query);
  },

  error(error, e) {
    if (e.cn) {
      // A connection-related error;
      // Connections are reported back with the password hashed,
      // for safe errors logging, without exposing passwords.
      console.log("CN:", e.cn);
      console.log("EVENT:", error.message || error);
    }
  },
};

const pgp = pgPromise(initOptions);
const cn = {
  host: Config.db.DB_HOST, // 'localhost' is the default;
  port: Config.db.DB_PORT, // 5432 is the default;
  database: Config.db.DB_NAME,
  user: Config.db.DB_USER,
  password: Config.db.DB_PASS,
};

// const db = pgp('postgres://username:password@host:port/database');

pgp.pg.types.setTypeParser(1114, (s) => s);

const db = pgp(cn); // database instance;

db.connect()
  .then((obj) => {
    obj.done(); // success, release the connection;
  })
  .catch((error) => {
    console.log("ERROR:", error.message || error);
  });


export default db;