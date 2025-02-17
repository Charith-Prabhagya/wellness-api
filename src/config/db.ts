import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// MongoDB Connection
const MONGO_URI =
  process.env.MONGO_URI ?? "mongodb://localhost:27017/express_ts_mongo";

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
