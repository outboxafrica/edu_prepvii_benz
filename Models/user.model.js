const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// define User schema
const UserSchema = new Schema({
  //   _id: mongoose.Schema.Types.ObjectId,
  userName: {
    type: String,
    required: true,
    max: 100,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  contact: Number,
});

module.exports = mongoose.model("User", UserSchema);
