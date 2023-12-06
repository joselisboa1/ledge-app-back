const express = require('express');
const router = express.Router();
const visualization = require("./controllers/visualization.controller")
router.use("/visualization", visualization)

module.exports = router;