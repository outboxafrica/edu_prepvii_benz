const express = require("express");
const router = express.Router();

const answerController = require("../Controllers/answer.controller");

router.post('/answer', answerController.createAns)


module.exports = router