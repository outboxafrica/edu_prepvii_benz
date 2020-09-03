const express = require("express");
const router = express.Router();

const questionController = require("../Controllers/question.controller");

router.post('/question', questionController.createQn)


module.exports = router