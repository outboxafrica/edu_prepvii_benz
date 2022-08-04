const joi = require("joi");
// validate signup fields
const signUpCheck = (data) => {
  const validateSchema = joi.object({
    username: joi.string().min(4).required(),
    email: joi.string().min(4).required().email(),
    password: joi.string().min(4).required(),
  });
  return validateSchema.validate(data);
};

//validate login fields
const loginCheck = (data) => {
  const validateSchema = joi.object({
    username: joi.string().min(4).required(),
    password: joi.string().min(4).required(),
  });
  return validateSchema.validate(data);
};

module.exports.signUpCheck = signUpCheck;
module.exports.loginCheck = loginCheck;
