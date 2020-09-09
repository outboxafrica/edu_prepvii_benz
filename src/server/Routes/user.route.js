// user Routes
const express = require("express");
const router = express.Router();

const userController = require("../Controllers/user.controller");

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
router.delete("/user/:id/delete", userController.deleteUser);
//update User by Id
router.put("/user/:id/update", userController.updateUser);
// view user
router.get("/user/:id", userController.findUserById);
//login
router.post("/auth/login", userController.LogIn);

module.exports = router;
