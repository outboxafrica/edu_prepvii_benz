
//credit : https://github.com/outboxafrica/edu_lookbook

require("dotenv").config();
const mongoose = require("mongoose");
const { DEVELOPMENT, PRODUCTION, LOCAL } = require("./envTypes");

let DB_URL;
switch (process.env.NODE_ENV) {
  case DEVELOPMENT:
    DB_URL = process.env.DB_URL_DEV;
    break;
  case PRODUCTION:
    DB_URL = process.env.DB_URL_PROD;
    break;
  case LOCAL:
    DB_URL = process.env.DB_URL_LOC;
    break;
  default:
    DB_URL = process.env.DB_URL;
}

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
};

function establishConnection() {
  console.log("\nEstablishing Database Connection . . . ");
  mongoose
    .connect('mongodb+srv://isaac2019:isaac2019@cluster0.q2hvz.mongodb.net/test2?retryWrites=true&w=majority', options)
    .then(() => {
      console.info("\nDatabase Connection Established!");
    })
    .catch((err) => {
      console.log("\nDatabase Connection Failed!");
      console.error("Error Details: ", err);
      console.log("\n\nDatabase Connection Failed, Retrying . . .");
      establishConnection();
    });
}

establishConnection();
const db = mongoose.connection;
module.exports = db;

