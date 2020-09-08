// Bring in the express server
const express = require("express");

// Bring in the Express Router
const router = express.Router();

// Import the Controller
const controller = require("../controllers");

// Create a new Note
router.post("/", controller.create);

// Get all Notes
router.get("/", controller.findAll);

// Get Note by Id
router.get("/:id", controller.findOne);

// Modify existing Note
router.put("/:id", controller.update);

// Delete Note by Id
router.delete("/:id", controller.delete);

module.exports = router;
