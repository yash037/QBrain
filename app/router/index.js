const express = require("express");
const router = express.Router();

// import
const DBConnection = require("../../database/DBConnection");
const auth = require("./auth");
const quizzer = require("./quizzer");
const quiz = require("./quiz");

// Connect to database
DBConnection.dbConnect();

// Base route
router.get("/api", (req, res) => {
  res.send("Hello to QBrain Backend System");
});

// Route middleware
router.use("/api/auth", auth);
router.use("/api/quizzers", quizzer);
router.use("/api/quizzes", quiz);

module.exports = router;
