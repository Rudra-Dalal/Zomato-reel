const express = require("express");
const router = express.Router();
const authmiddleware = require("../middlewares/auth.middleware");
const foodController = require("../controllers/food.controller");
const multer = require("multer");

const upload = multer({
  storage: multer.memoryStorage(),
});

//POST /api/food [protected]

router.post(
  "/",
  authmiddleware.authfoodPartnermiddleware,
  upload.single("video"),
  foodController.createFood,
);

// GET/api/food [protected]
router.get("/", authmiddleware.authUsermiddleware, foodController.getFoodItems);

module.exports = router;
