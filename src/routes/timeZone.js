const express = require("express");
const router = express.Router();

const axios = require("axios");

router.get("/:cont/:city", async (req, res) => {
  if (req.params.cont && req.params.city) {
    var config = {
      method: "get",
      url: `http://worldtimeapi.org/api/timezone/${req.params.cont}/${req.params.city}`,
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
