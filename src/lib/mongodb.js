import mongoose from "mongoose";

// Cached connection for Next.js serverless — reuse across warm invocations.
const globalForMongo = globalThis;

// Connect to MongoDB via Mongoose.
// Expects MONGODB_URI in environment (never expose to the client).
export async function connectMongo() {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    // Fail closed — do not attempt a default local URI in production hosts.
    throw new Error("MONGODB_URI is not configured.");
  }

  if (globalForMongo.__mongooseConn?.readyState === 1) {
    return globalForMongo.__mongooseConn;
  }

  if (!globalForMongo.__mongoosePromise) {
    globalForMongo.__mongoosePromise = mongoose.connect(uri, {
      // Keep buffers off so missing connection fails fast instead of hanging.
      bufferCommands: false,
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 10_000,
    });
  }

  globalForMongo.__mongooseConn = await globalForMongo.__mongoosePromise;
  return globalForMongo.__mongooseConn;
}
