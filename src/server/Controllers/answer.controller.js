const createError = require("http-errors");
const mongoose = require("mongoose");

const Answer = require("../Models/answer.model");

// create Answer
module.exports.createAns = async (req, res, next) => {
    try {
        const answer = new Answer(req.body)
        const result = await answer.save()
        res.send(result)
    } catch (error) {
         console.log(error.message);
    if (error.name === "ValidationError") {
      next(createError(422, error.message));
      return;
    }
    next(error);
    }
}