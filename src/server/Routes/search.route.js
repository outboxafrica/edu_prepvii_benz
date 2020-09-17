const express = require("express");

const router = express.Router();

const searchController = require("../Controllers/search.controller");

router.get("/users/search", searchController.searchUser);
router.get("/question/search", searchController.searchQn);
router.get("/answers/search", searchController.searchAnswer);
module.exports = router;
