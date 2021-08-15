const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  var arr = ["1", "2", "3", "4", "5", "6"];
  res.status(200).json({ answer: arr[Math.floor(Math.random() * arr.length)] });
});

module.exports = router;
