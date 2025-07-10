
const express = require("express");
const router = express.Router();
router.post("/", (req, res) => res.send("Create post"));
router.get("/", (req, res) => res.send("Get all posts"));
module.exports = router;
