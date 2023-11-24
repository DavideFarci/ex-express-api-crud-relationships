const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

// INDEX
router.get("/", postController.index);

// SHOW (SLUG)
router.get("/:slug", postController.show);

// STORE
router.post("/", postController.store);

// UPDATE
router.put("/:slug", postController.update);

// DELETE
router.delete("/:slug", postController.destroy);

module.exports = router;
