import mongoose from "mongoose";

// Connect to MongoDB using any of the supported env vars
// Prefer MONGODB_URI, fallback to MONGO_DB and ATLASMONGODB_URI
const connectMongo = async () => {
  const uri =  process.env.ATLASMONGODB_URI;
  if (!uri) {
    throw new Error("MongoDB connection string not found. Set MONGODB_URI (or MONGO_DB/ATLASMONGODB_URI) in .env.local");
  }
  return mongoose.connect(uri);
};

export default connectMongo;