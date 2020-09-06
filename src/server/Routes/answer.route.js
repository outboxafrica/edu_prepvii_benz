const express = require("express");
const router = express.Router();

const answerController = require("../Controllers/answer.controller");

//post an answer
router.post("/answer/create", answerController.createAns);

// get all answers
router.get("/answers", answerController.getAns);

// update answer
router.put("/answer/:id/update", answerController.updateAns);

// delete answer
router.delete("/answer/:id/delete", answerController.deleteAns);

// get answer by Id
router.get('/answer/:id', answerController.getAnsById)

module.exports = router;
