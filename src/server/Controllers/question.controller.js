const createError = require("http-errors");
const mongoose = require("mongoose");
const Question = require("../Models/question.model");

// create question
module.exports.createQn = async (req, res, next) => {
  try {
    if (!req.body) return res.json({ error: "Missing Fields " });
    const question = new Question(req.body);
    const result = await question.save();
    res.status(200).send({
      message: "question created successfully",
    });
  } catch (error) {
    console.log(error.message);
    if (error.name === "ValidationError") {
      next(createError(422, error.message));
      return;
    }
    next(error);
  }
};

module.exports.getQuestions = async (req, res, next) => {
  try {
    const result = await Question.find({}, { __v: 0 }).populate(
      "postedBy",
      "username"
    );
    if (!result) return res.json({ error: 404, message: "Not Found" });
    res.send(result);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

module.exports.deleteQn = async (req, res, next) => {
  const id = req.params.id;
  try {
    const result = await Question.findByIdAndDelete(id);
    // console.log(result);
    if (!result) {
      res.status(404).json({ message: "Question does not exist" });
    }
    res.send({ message: "Question successfully deleted" });
  } catch (error) {
    console.log(error.message);
    if (error instanceof mongoose.CastError) {
      next(createError(400, "Invalid Question id"));
      return;
    }
    next(error);
  }
};

module.exports.updateQn = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updates = req.body;
    const options = { new: true };

    const result = await Question.findByIdAndUpdate(id, updates, options);
    if (!result) {
      res.status(404).send({ message: "Question does not exist" });
    }
    res.status(200).send({ message: " question successfully updated" });
  } catch (error) {
    console.log(error.message);
    if (error instanceof mongoose.CastError) {
      return next(createError(400, "Invalid Question Id"));
    }

    next(error);
  }
};

module.exports.getQuestionById = async (req, res, next) => {
  const id = req.params.id;
  try {
    // const question = await Question.findById(id).populate("User");
    const question = await Question.findOne({ _id: id })
      .populate("postedBy", "username")
      .exec();
    if (!question) {
      res.status(404).send({
        message: "Question Not found",
      });
    }
    res.status(200).send(question);
  } catch (error) {
    console.log(error.message);
    if (error instanceof mongoose.CastError) {
      next(createError(400, "Invalid question id"));
      return;
    }
    next(error);
  }
};

module.exports.vote = (user, vote) => {
  const existingVote = this.votes.find((v) => v.user._id.equals(user));

  if (existingVote) {
    // reset score
    this.score -= existingVote.vote;
    if (vote == 0) {
      // remove vote
      this.votes.pull(existingVote);
    } else {
      //change vote
      this.score += vote;
      existingVote.vote = vote;
    }
  } else if (vote !== 0) {
    // new vote
    this.score += vote;
    this.votes.push({ user, vote });
  }

  return this.save();
};
