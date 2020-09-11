const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const signUpRoutes = require('./api/routes/signup');
app.use(cors);
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

app.use("/api/v1", Router);
app.use("/api/v1",signupRouter);

module.exports = app;
