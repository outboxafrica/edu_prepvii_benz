const express = require("express");
const router = express.Router();

const questionController = require("../Controllers/question.controller");

//create a question
router.post("/question/create", questionController.createQn);

//delete question
router.delete("/question/:id/delete", questionController.deleteQn);
// update/edit question
router.put("/question/:id/update", questionController.updateQn);
//get questions
router.get("/questions/", questionController.getQuestions);

// get question by Id
router.get("/question/:id", questionController.getQuestionById);

module.exports = router;
