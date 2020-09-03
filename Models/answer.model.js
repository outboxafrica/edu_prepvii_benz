// Answer Model
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AnswerSchema = new Schema({
  answer: {
    type: String,
    required: true,
    max: 1000,
  },
  upVote: {
    type: Number,
  },
  downVote: {
    type: Number,
  },
});

module.exports = mongoose.model("answer", AnswerSchema);
