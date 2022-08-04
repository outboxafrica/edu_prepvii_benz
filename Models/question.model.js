const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// define schema for questions
const questionSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  question: {
    type: Text,
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

module.exports = mongoose.model("question", questionSchema);
