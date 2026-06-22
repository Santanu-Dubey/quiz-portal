const express = require("express");
const Result = require("../models/Result");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const leaderboard = await Result.find()
      .sort({ score: -1 })
      .limit(10)
      .populate("userId", "name");

    res.json(leaderboard);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;