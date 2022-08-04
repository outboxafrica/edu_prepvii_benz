const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

// email validation credit: https://stackoverflow.com/questions/18022365/mongoose-validate-email-syntax/28396238
let validateEmail = (email) => {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};
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
    trim: true,
    lowercase: true,
    unique: true,
    required: "Email address is required",
    validate: [validateEmail, "Please fill a valid email address"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  password: {
    type: String,
    required: true,
    set: (value) => {
      return bcrypt.hashSync(value, 10);
    },
  },
  contact: Number,
  answers: {
    type: Array,
  },
  questions: [
    {
      type: Schema.Types.ObjectId,
      ref: "question",
    },
  ],
});

// create search index
UserSchema.index({ "$**": "text" });

module.exports = mongoose.model("User", UserSchema);
