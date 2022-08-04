
//credit : https://github.com/outboxafrica/edu_lookbook

require("dotenv").config();
const mongoose = require("mongoose");
const { DEVELOPMENT, PRODUCTION, LOCAL, TEST } = require("./envTypes");

let DB_URL;
switch (process.env.NODE_ENV) {
  case DEVELOPMENT:
    DB_URL = process.env.DB_URL_DEV;
    break;
  case PRODUCTION:
    DB_URL = process.env.DB_URL_PROD;
    break;
  case TEST:
    DB_URL = process.env.DB_URL_TEST;
    break;
  case LOCAL:
    DB_URL = process.env.DB_URL_LOC;
    break;
  default:
    DB_URL = process.env.DB_URL;
}

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
};

function establishConnection() {
  console.log("\nEstablishing Database Connection . . . ");
  mongoose
    .connect(DB_URL, options)
    .then(() => {
      console.info("\nDatabase Connection Established!");
    })
    .catch((err) => {
      console.log("\nDatabase Connection Failed!");
      console.error("Error Details: ", err);
      console.log("\n\nDatabase Connection Failed, Retrying . . .");
      
      // attempt to reconnet for 1 minute. 
      // if  fails to connect in one minute, cancel connection
      setTimeout(establishConnection, 60000);
    }).catch((err) => {
      console.log("\nDatabase Connection Failed!");
      console.error("Error Details: ", err);
    }).finally(() => {
      console.log("\nDatabase Connection Closed!");
    })
}

establishConnection();
const db = mongoose.connection;
module.exports = db;

