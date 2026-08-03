const foodModel = require("../models/fooditem.model");
const storageService = require("../services/storage.service");
const { v4: uuidv4 } = require("uuid");

async function createFood(req, res) {
  const fileuploadResult = await storageService.uploadFile(
    req.file.buffer,
    uuidv4(),
  );

  const foodItem = await foodModel.create({
    name: req.body.name,
    description: req.body.description,
    video: fileuploadResult.url,
    foodPartner: req.foodPartner._id,
  });

  res.status(201).json({
    message: "Food item created successfully",
    food: foodItem,
  });

  res.send("Food item created successfully");
}

async function getFoodItems(req, res) {
  foodItems = await foodModel.find({});
  res.status(200).json({
    message: "Food items fetched successfully",
    foodItems: foodItems,
  });
}

module.exports = {
  createFood,
  getFoodItems,
};
