import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_URL);
    con.connections && console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
  }
};
