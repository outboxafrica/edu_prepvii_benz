const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema({
  post: {
    question: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "question",
    },
    answer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "answer",
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
});

module.exports = mongoose.model("post", postSchema);
