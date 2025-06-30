const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

async function connect() {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("✅ Connected to Database.");
  } catch (err) {
    console.error("❌ Error connecting to Database:", err.message);
  }
}

const DBConnection = {
  dbConnect: connect,
};

module.exports = DBConnection;
