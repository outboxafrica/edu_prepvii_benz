
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

async function establishConnection() {
  return mongoose.connect(DB_URL, options);
}
module.exports = establishConnection;

