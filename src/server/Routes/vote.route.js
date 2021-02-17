const express = require("express");
const router = express.Router();

const voteController = require("../Controllers/votes.controller");
const requireAuth = require("../helpers/auth");

router.get(
  "/votes/upvote/:question/:answer?",
  requireAuth.authenticateToken,
  voteController.upvote
);
router.get(
  "/votes/downvote/:question/:answer?",
  requireAuth.authenticateToken,
  voteController.downvote
);
router.get(
  "/votes/unvote/:question/:answer?",
  requireAuth.authenticateToken,
  voteController.unvote
);

module.exports = router;
