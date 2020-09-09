// logic for user
const createError = require("http-errors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config();
const User = require("../Models/user.model");
const verifyToken = require("../helpers/validation");

// create a user
module.exports.createUser = async (req, res, next) => {
  try {
    const user = new User(req.body);
    const result = await user.save();
    const token = jwt.sign({ id: user._id }, process.env.SECRET, {
      expiresIn: 86400, // expires in 24 hours
    });

    // res.send(result);
    res.status(200).send({ auth: true, token: token });
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
        var token = req.headers["x-access-token"];
        if (!token)
          return res
            .status(401)
            .send({ auth: false, message: "No token provided." });
        jwt.verify(token, process.env.SECRET, function (err, decoded) {
          if (err)
            return res
              .status(500)
              .send({ auth: false, message: "Failed to authenticate token." });

          res.status(200).send(decoded);
        });
        return res.status(200).json({ token });
      } else {
        return res
          .status(400)
          .json({ error: "Invalid password, retry with correct password!" });
      }
    } else {
      return res.status(404).json({ error: "No such user exists!" });
    }
  } catch (err) {
    console.log("Error while loging in: ", err);
    return res.status(500).json({
      error: "Server error occured during login, please try again later!",
    });
  }
};

module.exports.findUserById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id).select("-password");
    // const user = await User.findOne({ _id: id });
    if (!user) {
      throw createError(404, "User does not exist.");
      res.json({
        status: 404,
        message: "User Does not Exist",
      });
    }
    res.send(user);
  } catch (error) {
    console.log(error.message);
    if (error instanceof mongoose.CastError) {
      next(createError(400, "Invalid User id"));
      res.json({
        status: 400,
        Message: "Bad Request, Invalid User Id",
      });
      return;
    }
    next(error);
  }
};

module.exports.updateUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updates = req.body;
    const options = { new: true };

    const result = await User.findByIdAndUpdate(id, updates, options);
    if (!result) {
      throw createError(404, "User does not exist");
      res.json({
        status: 404,
        Message: "Not Foud, User does not exist",
      });
    }
    res.send(result);
  } catch (error) {
    console.log(error.message);
    if (error instanceof mongoose.CastError) {
      return next(createError(400, "Invalid User Id"));
    }

    next(error);
  }
};

module.exports.deleteUser = async (req, res, next) => {
  const id = req.params.id;
  try {
    const result = await User.findByIdAndDelete(id);
    // console.log(result);
    if (!result) {
      throw createError(404, "User does not exist.");
    }
    res.send(result);
  } catch (error) {
    console.log(error.message);
    if (error instanceof mongoose.CastError) {
      next(createError(400, "Invalid User id"));
      return;
    }
    next(error);
  }
};

module.exports.getUsers = async (req, res, next) => {
  try {
    //   https://stackoverflow.com/questions/12096262/how-to-protect-the-password-field-in-mongoose-mongodb-so-it-wont-return-in-a-qu
    const results = await User.find({}, { __v: 0 }).select("-password");
    res.send(results);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};
