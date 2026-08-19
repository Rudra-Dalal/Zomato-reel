const foodPartnerModel = require("../models/foodpartner.model");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

async function authfoodPartnermiddleware(req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "Please login first!" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const foodPartner = await foodPartnerModel.findById(decoded.id);
    req.foodPartner = foodPartner;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token!" });
  }
}

async function authUsermiddleware(req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "Please login first!" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded.id);
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token!" });
  }
}

module.exports = {
  authfoodPartnermiddleware,
  authUsermiddleware,
};
