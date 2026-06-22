const mongoose = require("mongoose");

const resultSchema =
  new mongoose.Schema(
    {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },

      category: {
        type: String,
      },

      score: {
        type: Number,
      },

      totalQuestions: {
        type: Number,
      },
    },
    {
      timestamps: true,
    }
  );

module.exports = mongoose.model(
  "Result",
  resultSchema
);