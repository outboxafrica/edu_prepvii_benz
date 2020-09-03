const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//get .env variables
require("dotenv").config();

//init express
const app = express();

// constants
const Router = require("./Routes/user.route");
const question = require('./Routes/question.route')
const answer = require('./Routes/answer.route')

const PORT = process.env.PORT || 5000;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
};

let mongoDB = process.env.MONGODB_URI || "";
mongoose.connect(mongoDB, options);

mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({
    name: "edu api",
    version: "1.0.0",
    author: "team-benz",
  });
});

// base route for users
app.use("/api/v1/", Router, question, answer);


app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
