import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const { MONGODB_URI, MONGODB_DB } = process.env;

if (!MONGODB_URI) {
	throw new Error('Mongo uri define hoinai vitre bosha');
}
if (!MONGODB_DB) {
	throw new Error('Mongo DB name define hoinai vitre bosha');
}

let cached = global.mongodb;
if (!cached) {
	cached = global.mongo = { conn: null, promise: null };
}

export async function connectToDatabase() {
	if (cached.conn) {
		return cached.conn;
	}

	if (!cached.promise) {
		const opts = {
			useNewUrlParser: true,
			useUnifiedTopology: true
		};
		console.log(`MongoDB URI: ${MONGODB_URI}`);
		console.log(`MongoDB DB: ${MONGODB_DB}`);

		cached.promise = MongoClient.connect(MONGODB_URI, opts)
			.then((client) => {
				console.log('Connected to MongoDb');
				return {
					client,
					db: client.db(MONGODB_DB)
				};
			})
			.catch((error) => {
				console.error('MongoDB connection error:', error);
				throw new Error('Failed to connect to MongoDB');
			});
	}

	cached.conn = await cached.promise;
	return cached.conn;
}
