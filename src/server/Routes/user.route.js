// user Routes
const express = require("express");
const router = express.Router();

const userController = require("../Controllers/user.controller");
const auth = require("../helpers/auth");

//Default Route
router.get("/", (req, res) => {
  res.json({
    name: "edu-api",
    author: "team-benz",
    version: "1.0.0",
  });
});

//get all users
router.get("/users", userController.getUsers);
//create User
router.post("/auth/signup", userController.createUser);
//delete user by Id
router.delete("/user/:id", auth.authenticateToken, userController.deleteUser);
//update User by Id
router.put("/user/:id", auth.authenticateToken, userController.updateUser);
// view user
router.get("/user/:id", auth.authenticateToken, userController.findUserById);
//login
router.post("/auth/login", userController.Login);

module.exports = router;
