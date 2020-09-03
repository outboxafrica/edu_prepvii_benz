// logic for user
const createError = require("http-errors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt")

const User = require("../Models/user.model");

// create a user
module.exports.createUser = async (req, res, next) => {
  try {
    const user = new User(req.body);
    const result = await user.save();
    res.send(result);
  } catch (error) {
    console.log(error.message);
    if (error.name === "ValidationError") {
      next(createError(422, error.message));
      return;
    }
    next(error);
  }
};

// // login user
module.exports.LogIn = async (req, res) => {
  try {
    //check whether the user exits
    const user = await User.findOne({ username: req.body.username });
    if (user) {
      //compare passwords using Bcrypt
      const result = await bcrypt.compare(req.body.password, user.password);
      if (result) {
        // const token = signToken(user);
        return res.status(200)//.json({ token });
      } else {
        return res
          .status(400)
          .json({ error: "Invalid password, retry with correct password!" });
      }
    } else {
      return res
        .status(404)
        .json({ error: "No such user exists!" });
    }
  } catch (err) {
    console.log("Error while loging in: ", err);
    return res.status(500).json({
      error: "Server error occured during login, please try again later!",
    });
  }
};
