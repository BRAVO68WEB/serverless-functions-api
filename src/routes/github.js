const express = require("express");
const router = express.Router();

const axios = require("axios");

router.get("/", async (req, res) => {
  if (req.query.username) {
    var config = {
      method: "get",
      url: `https://api.github.com/users/${req.query.username}`,
    };
  } else {
    var config = {
      method: "get",
      url: `https://api.github.com/users/github`,
    };
  }

  axios(config)
    .then(function (response) {
      res.json(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});

module.exports = router;
