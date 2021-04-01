const express = require("express");
const router = express.Router();

router.get("/", (req, res,next) => {
  res.send("church application designed")
});

router.get("/", (req, res,next) => {
  res.send (index.html);
  next();
})


module.exports = router;
