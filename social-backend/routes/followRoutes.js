
const express = require("express");
const router = express.Router();
router.post("/follow", (req, res) => res.send("Follow user"));
module.exports = router;
