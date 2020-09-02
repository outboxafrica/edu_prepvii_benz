const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

//get .env variables
require("dotenv").config();

//init express
const app = express();

// constants
const Router = require("./Routes/user.route");

const PORT = process.env.PORT || 5000;

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

// base route
app.use("/api/v1/", Router);

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});

// /api/v1/
