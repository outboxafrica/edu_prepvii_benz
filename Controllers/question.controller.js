const createError = require("http-errors");
const mongoose = require("mongoose");

const Question = require("../Models/question.model");

// create question
module.exports.createQn = async (req, res, next) => {
    try {
        const question = new Question(req.body)
        const result = await question.save()
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