import mongoose from "mongoose";

// Cache mongoose connection to avoid creating multiple connections in dev
let cached = global.__mongoose_conn;
if (!cached) {
  cached = global.__mongoose_conn = { conn: null, promise: null };
}

const connectMongo = async () => {
  if (cached.conn) return cached.conn;

  const uri =
    process.env.MONGODB_URI ||
    process.env.ATLASMONGODB_URI ||
    process.env.MONGO_DB;

  if (!uri) {
    throw new Error(
      "MongoDB connection string not found. Set MONGODB_URI (or ATLASMONGODB_URI / MONGO_DB)."
    );
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(uri).then((m) => m);
  }
  cached.conn = await cached.promise;
  return cached.conn;
};

export default connectMongo;