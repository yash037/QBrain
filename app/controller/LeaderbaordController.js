const User = require("../model/User");
const Leaderboard = require("../model/Leaderboard");

const LeaderboardController = {
  getByQuiz: async (req, res) => {
  try {
        const quizId = req.params.quizId;

        const leaderboard = await Leaderboard.find({ quizId })
        .sort({ score: -1, attemptedAt: 1 })
        .limit(20);

        // Get user info
        const result = await Promise.all(
        leaderboard.map(async (entry) => {
            const user = await User.findById(entry.userId); // or Quizzer
            return {
            name: user?.name || "Anonymous",
            score: entry.score,
            flawless: entry.flawless,
            _id: entry._id,
            };
        })
        );

        res.status(200).send(result);
    } catch (err) {
        console.log("Error:", err);
        res.status(500).send("Error fetching leaderboard");
    }
    },
}

module.exports = LeaderboardController;
