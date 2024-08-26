import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const connectDB = async () => {
  try {
    // Use environment variable for MongoDB URI
    const conn = await mongoose.connect(process.env.MONGO_URI as string);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error: ${error.message}`);
    } else {
      console.error(`Unknown error: ${error}`);
    }
    process.exit(1);
  }
};

export default connectDB;
