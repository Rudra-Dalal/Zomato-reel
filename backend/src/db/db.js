const mongoose = require("mongoose");

function connectDB() {
  mongoose
    .connect(process.env.MONGODB_URL, {})
    .then(() => {
      console.log("DB connected");
    })
    .catch((err) => {
      console.log("DB connection error", err);
    });
}

module.exports = connectDB;
