const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

// define User schema
const UserSchema = new Schema({
  //   _id: mongoose.Schema.Types.ObjectId,
  username: {
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
    set: (value) => {
      return bcrypt.hashSync(value, 10);
    },
  },
  contact: Number,
});

module.exports = mongoose.model("User", UserSchema);
