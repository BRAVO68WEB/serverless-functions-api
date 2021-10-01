const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    {
      route: "/github",
      query: ["?=username"],
    },
    {
      route: "/roll-a-die",
    },
    {
      route: "/tz",
      parameters: ["/:continent/:city"],
    },
  ]);
});

router.use("/github", require("./github"));
router.use("/roll-a-die", require("./roll-a-die"));
router.use("/tz", require("./timeZone.js"));

module.exports = router;
