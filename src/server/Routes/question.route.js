const express = require("express");
const router = express.Router();

const questionController = require("../Controllers/question.controller");

//create a question
router.post("/questions", questionController.createQn);

//delete question
router.delete("/questions/:id", questionController.deleteQn);
// update/edit question
router.put("/questions/:id", questionController.updateQn);
//get questions
router.get("/questions", questionController.getQuestions);

// get question by Id
router.get("/questions/:id", questionController.getQuestionById);

module.exports = router;
