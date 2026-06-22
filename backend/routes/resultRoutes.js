const express = require("express");
const Result = require("../models/Result");

const router = express.Router();

router.post("/save", async (req, res) => {
  try {
    const {
      userId,
      category,
      score,
      totalQuestions,
    } = req.body;

    const result =
      await Result.create({
        userId,
        category,
        score,
        totalQuestions,
      });

    res.status(201).json({
      message: "Result Saved",
      result,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;