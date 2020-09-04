const mongoose = require("mongoose");

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
  dateCreated: {
    type: Date,
    default: Date.now,
  },
  comments: [
    {
      body: "string",
      by: mongoose.Schema.Types.ObjectId,
    },
  ],
  upVote: {
    type: Number,
  },
  downVote: {
    type: Number,
  },
});

module.exports = mongoose.model("question", questionSchema);
