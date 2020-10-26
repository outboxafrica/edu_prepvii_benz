const mongoose = require("mongoose");
const voteSchema = require("./vote");
const commentSchema = require("./comment");
const answerSchema = require("./answer.model");

const Schema = mongoose.Schema;

// define schema for questions
const questionSchema = new Schema({
  question: {
    type: String,
    required: true,
    max: 1000,
  },
  // https://stackoverflow.com/questions/18001478/referencing-another-schema-in-mongoose
  // postedBy: userSchema referencing the whole user schema
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  title: { type: String, required: true },
  text: { type: String, required: true },
  tags: [{ type: String, required: true }],
  score: { type: Number, default: 0 },
  votes: [voteSchema],
  comments: [commentSchema],
  //   answers: { result: [answerSchema] },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
  answered: {
    type: Boolean,
    default: false,
  },
  upVote: {
    type: Number,
  },
  downVote: {
    type: Number,
  },
});

questionSchema.index({ "$**": "text" });

module.exports = mongoose.model("question", questionSchema);
