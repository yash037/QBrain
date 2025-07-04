const mongoose = require("mongoose");

const leaderboardEntrySchema = new mongoose.Schema({
  quizId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Quiz",
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", 
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  timeTaken: {
    type: Number,
    default: 0,
  },
  flawless: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("LeaderboardEntry", leaderboardEntrySchema);
