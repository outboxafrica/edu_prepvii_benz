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
