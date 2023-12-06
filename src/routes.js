const express = require('express');
const router = express.Router();
const visualization = require("./controllers/visualization.controller")
router.use("/visualization", visualization)

// const elevators = require("./controllers/elevator.controller")
// const reset = require("./controllers/reset.controller")
// const levels = require("./controllers/level.controller")

// router.use("/elevators", elevators)
// router.use("/reset", reset)
// router.use("/levels", levels)

module.exports = router;