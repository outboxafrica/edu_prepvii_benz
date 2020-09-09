const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const Router = require("./Routes/user.route");
const question = require("./Routes/question.route");
const answer = require("./Routes/answer.route");


app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, authorization"
  );
  next();
});


app.use("/api/v1/", Router, answer, question);


module.exports = app;
