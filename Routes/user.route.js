const express = require("express");
const router = express.Router();

// test route
router.get("/test", (req, res) => {
  res.send(`Hello from test Route`);
});

router.get("/", (req, res) => {
  res.json({
    name: "edu api",
    version: "1.0.0",
    author: "team-benz",
  });
});

module.exports = router;
