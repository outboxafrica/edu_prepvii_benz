const express = require("express");
const router = express.Router();

const questionController = require("../Controllers/question.controller");

//create a question
router.post("/question/create", questionController.createQn);

//delete question

// update/edit question

//get questions
router.get("/questions", questionController.getQuestions);

module.exports = router;
