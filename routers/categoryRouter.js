const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");

// STORE
router.post("/", categoryController.store);

module.exports = router;
