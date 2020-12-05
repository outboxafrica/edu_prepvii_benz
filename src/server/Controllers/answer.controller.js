const createError = require("http-errors");
const mongoose = require("mongoose");

const Answer = require("../Models/answer.model");

// create Answer
module.exports.createAns = async (req, res, next) => {
  try {
    const answer = new Answer(req.body);
    const result = await answer.save();
    res.status(200).send({ message: "Answered to the question successfully" });
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
    const answer = await Answer.findById(id)
      .populate("answeredBy", "username")
      .exec();
    // const answer = await Answer.findOne({ _id: id });
    if (!answer) {
      res.status(404).send({
        message: " Answer does not exisit ",
      });
    } else {
      res.status(200).send(answer);
    }
  } catch (error) {
    if (error instanceof mongoose.CastError) {
      next(createError(400, "Invalid answer id"));
      return;
    }
    next(error);
  }
};

module.exports.getAns = async (req, res, next) => {
  try {
    const result = await Answer.find({}, { __v: 0 })
      .populate("answeredBy", "username")
      .exec();
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
      res.status(404).send({ message: "Answer does not exist." });
    }
    res.send({ message: "Answer deleted Sucessfully " });
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
      res.status(404).send({ message: "Answer does not exist." });
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
