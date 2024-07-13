// test-db-query.js
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const { MONGODB_URI, MONGODB_DB } = process.env;

const client = new MongoClient(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

async function testQuery() {
	try {
		await client.connect();
		const db = client.db(MONGODB_DB);
		const collection = db.collection('Authentication');
		const result = await collection.findOne({ email: 'test@example.com' });
		console.log('Test Query Result:', result); // Check if the test query returns the expected result
	} catch (error) {
		console.error('Test Query Error:', error);
	} finally {
		await client.close();
	}
}

testQuery();
