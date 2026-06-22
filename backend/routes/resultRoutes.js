const express = require("express");

const router = express.Router();

router.post("/save", (req, res) => {
  res.json({
    message: "Result Route Working",
  });
});

module.exports = router;