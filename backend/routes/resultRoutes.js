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

router.get("/user/:userId", async (req, res) => {
  try {
    const results = await Result.find({
      userId: req.params.userId,
    }).sort({ createdAt: -1 });

    res.json(results);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.get("/stats/:userId", async (req, res) => {
  try {
    const results = await Result.find({
      userId: req.params.userId,
    });

    const totalQuizzes =
      results.length;

    const highestScore =
      results.length > 0
        ? Math.max(
            ...results.map(
              (r) => r.score
            )
          )
        : 0;

    const averageScore =
      results.length > 0
        ? (
            results.reduce(
              (sum, r) =>
                sum + r.score,
              0
            ) / results.length
          ).toFixed(2)
        : 0;

    res.json({
      totalQuizzes,
      highestScore,
      averageScore,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;