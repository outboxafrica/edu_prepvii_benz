// logic for user
const createError = require("http-errors");
const mongoose = require("mongoose");

const User = require("../Models/user.model");

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
