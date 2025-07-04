const express = require("express");
const router = express.Router();
const LeaderboardController = require("../controller/LeaderbaordController");

// GET /api/leaderboard/:quizId
router.get("/:quizId", LeaderboardController.getByQuiz);

module.exports = router;
