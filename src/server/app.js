const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const morgan = require("morgan");
const app = express();

const Router = require("./Routes/user.route");
const question = require("./Routes/question.route");
const answer = require("./Routes/answer.route");
const search = require("./Routes/search.route");
const tags = require("./Routes/tags.route");
const votes = require("./Routes/vote.route");
const middlewares = require("./middlewares");
const RateLimit = require("./helpers/rateLimit");

app.use(morgan("common"));
app.use(helmet());
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

app.use(RateLimit);
app.use("/api/v1/", Router, answer, question, search, tags, votes);
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
