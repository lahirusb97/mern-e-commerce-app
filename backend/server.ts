import express from "express";
import connectDB from "./config/db";

const app = express();

// Connect to MongoDB
connectDB();

app.use(express.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {});
