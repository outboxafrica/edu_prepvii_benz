// Answer Model
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AnswerSchema = new Schema({
  answer: {
    type: String,
    required: true,
    max: 1000,
  },
  asweredBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  upVote: {
    type: Number,
  },
  downVote: {
    type: Number,
  },
});

module.exports = mongoose.model("answer", AnswerSchema);

