// Answer Model
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AnswerSchema = new Schema({
  answer: {
    type: String,
    required: true,
    max: 1000,
  },
  answeredBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  questionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Question",
  },
  upVote: {
    type: Number,
  },
  downVote: {
    type: Number,
  },
});

AnswerSchema.index({ "$**": "text" });

module.exports = mongoose.model("answer", AnswerSchema);
