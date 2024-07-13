import { connectToDatabase } from '../../../lib/index.js';

export async function GET() {
	try {
		const { db } = await connectToDatabase();
		const collection = db.collection('Fetched data');
		const data = await collection.find({}).toArray();

		return new Response(JSON.stringify(data), {
			headers: { 'Content-Type': 'application/json' }
		});
	} catch (e) {
		return new Response(JSON.stringify({ error: 'Failed to fetch data' }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' }
		});
	}
}

export async function POST(request) {
	try {
		const { db } = await connectToDatabase();
		const collection = db.collection('Fetched data');
		const body = await request.json();
		const result = await collection.insertOne(body);

		return new Response(JSON.stringify(result), {
			status: 201,
			headers: { 'Content-Type': 'application/json' }
		});
	} catch (e) {
		return new Response(JSON.stringify({ error: 'Failed to insert data' }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' }
		});
	}
}
