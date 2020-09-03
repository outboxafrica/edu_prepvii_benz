// user Routes
const express = require("express");
const router = express.Router();

const userController = require("../Controllers/user.controller");
// test route
router.get("/test", (req, res) => {
  res.render("index");
});

//get all users
router.get("/users", userController.getUsers);
//create User
router.post("/user/create", userController.createUser);
//delete user by Id
router.delete("/user/:id/delete", userController.deleteUser);
//update User by Id
router.put("/user/:id/update", userController.updateUser);

// view user

//login
router.post("/login", userController.LogIn);

module.exports = router;
