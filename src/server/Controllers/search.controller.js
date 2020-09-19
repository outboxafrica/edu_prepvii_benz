const mongoose = require("mongoose");
const User = require("../Models/user.model");
const Question = require("../Models/question.model");
const Answer = require("../Models/answer.model");
// search user
module.exports.searchUser = async (req, res, next) => {
  try {
    let query = req.query;
    const results = await User.find(query, { __v: 0 }).select("-password");
    if (!results.length) {
      res.send({ message: "No such user(s)" });
    } else {
      res.send(results);
    }
  } catch (error) {
    next(error);
  }
};

// search a question
module.exports.searchQn = async (req, res, next) => {
  try {
    let query = req.query;
    const results = await Question.find(query);
    if (!results.length) {
      res.status(404).send({ message: "No such question" });
    } else {
      res.status(200).send(results);
    }
  } catch (error) {
    next(error);
  }
};

module.exports.searchAnswer = async (req, res, next) => {
  try {
    let query = req.query;

    // const results = await Answer.find({ answer: { $regex: query } });
    const results = await Answer.find(query);
    if (!results.length) {
      res.status(404).send({ message: "No such answer " });
    } else {
      res.status(200).send(results);
    }
  } catch (error) {
    next(error);
  }
};

module.exports.searchUsers = async (req, res, next) => {
  try {
    const searchTerm = req.body.search;
    let results = await User.find({ $text: { $search: searchTerm } });
    if (!results.length) {
      res.status(404).send({ message: "No results found! " });
    } else {
      res.status(200).send({ results: results });
    }
  } catch (error) {
    next(error);
  }
};

module.exports.searchAnswers = async (req, res, next) => {
  try {
    const searchTerm = req.body.search;
    let results = await Answer.find({ $text: { $search: searchTerm } });
    if (!results.length) {
      res.status(404).send({ message: "No results found! " });
    } else {
      res.status(200).send({ results: results });
    }
  } catch (error) {
    next(error);
  }
};

module.exports.searchQns = async (req, res, next) => {
  try {
    const searchTerm = req.body.search;
    let results = await Question.find({ $text: { $search: searchTerm } });
    if (!results.length) {
      res.status(404).send({ message: "No results found! " });
    } else {
      res.status(200).send({ results: results });
    }
  } catch (error) {
    next(error);
  }
};
