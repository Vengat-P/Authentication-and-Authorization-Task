import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    //connect db by using mongoose connect method
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Mongo DB connected Successfully");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
