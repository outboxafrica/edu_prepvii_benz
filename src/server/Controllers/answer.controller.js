const createError = require("http-errors");
const mongoose = require("mongoose");

const Answer = require("../Models/answer.model");

// create Answer
module.exports.createAns = async (req, res, next) => {
  try {
    const answer = new Answer(req.body);
    const result = await answer.save();
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

module.exports.getAnsById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const answer = await Answer.findById(id);
    // const answer = await Answer.findOne({ _id: id });
    if (!answer) {
      throw createError(404, "answer does not exist.");
    }
    res.send(answer);
  } catch (error) {
    console.log(error.message);
    if (error instanceof mongoose.CastError) {
      next(createError(400, "Invalid answer id"));
      return;
    }
    next(error);
  }
};

module.exports.getAns = async (req, res, next) => {
  try {
    const result = await Answer.find({}, { __v: 0 });
    if (!result) return res.json({ error: 404, message: "Not Found" });
    res.send(result);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

module.exports.deleteAns = async (req, res, next) => {
  const id = req.params.id;
  try {
    const result = await Answer.findByIdAndDelete(id);
    // console.log(result);
    if (!result) {
      throw createError(404, "Answer does not exist.");
    }
    res.send(result);
  } catch (error) {
    console.log(error.message);
    if (error instanceof mongoose.CastError) {
      next(createError(400, "Invalid Answer id"));
      return;
    }
    next(error);
  }
};

module.exports.updateAns = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updates = req.body;
    const options = { new: true };

    const result = await Answer.findByIdAndUpdate(id, updates, options);
    if (!result) {
      throw createError(404, "Answer does not exist");
    }
    res.send(result);
  } catch (error) {
    console.log(error.message);
    if (error instanceof mongoose.CastError) {
      return next(createError(400, "Invalid Answer Id"));
    }

    next(error);
  }
};
