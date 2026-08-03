// start server
const app = require("./src/app");
const connectDB = require("./src/db/db");

const dotenv = require("dotenv"); // load env variables from .env
dotenv.config();

connectDB();

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
