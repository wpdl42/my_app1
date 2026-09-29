import mongoose from "mongoose"

const MONGODB_URI = process.env.MONGODB_URI

type MongooseCache = {
  conn: typeof mongoose | null
  promise: Promise<typeof mongoose> | null
}

declare global {
  var mongooseCache: MongooseCache | undefined
}

const cached: MongooseCache = global.mongooseCache ?? {
  conn: null,
  promise: null,
}

global.mongooseCache = cached
export async function connectDB() {
  if (!MONGODB_URI) {
    throw new Error(
      "MONGODB_URI 환경변수 없음. .env.local.example 참고하여 .env.local 만들어 주십쇼",
    )
  }

  if (cached.conn) return cached.conn

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI)
  }

  try {
    cached.conn = await cached.promise
  } catch (err) {
    cached.promise = null
    throw err
  }
  return cached.conn
}
