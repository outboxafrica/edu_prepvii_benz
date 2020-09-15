const mongoose = require("mongoose");

module.exports.search = async (req, res, next) => {
  var response = [];
  if (req.query.params) {
    response = await db.Post.find({ title: req.query.title });
  }
  res.json(response);
};
