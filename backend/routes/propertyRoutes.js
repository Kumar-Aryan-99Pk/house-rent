const express = require("express");
const router = express.Router();

const { addProperty, getProperties, searchProperties, updateProperty, deleteProperty} = require("../controllers/propertyController");
const protect = require("../middleware/authMiddleware");

router.post("/add", protect, addProperty);
router.get("/", getProperties);
router.get("/search", searchProperties);

router.put("/:id", protect, updateProperty);
router.delete("/:id", protect, deleteProperty);
module.exports = router;