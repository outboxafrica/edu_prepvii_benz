// user Routes
const express = require("express");
const router = express.Router();

const userController = require("../Controllers/user.controller");
// test route
router.get("/test", (req, res) => {
  res.send(`Hello from test Route`);
});

router.get("/", (req, res) => {
  res.json({
    name: "edu api",
    version: "1.0.0",
    author: "team-benz",
  });
});

//create User
router.post("/user/create", userController.createUser);
//delete user by Id

//update User by Id

// view user

//login
router.post("/login", userController.LogIn);

module.exports = router;
