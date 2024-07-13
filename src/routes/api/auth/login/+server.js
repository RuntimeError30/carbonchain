import { connectToDatabase } from '../../../../lib';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const { JWT_SECRET } = process.env;

export async function POST({ request, response }) {
	const { db } = await connectToDatabase();
	const collection = db.collection('Authentication');

	const { email, password } = await request.json();
	console.log('Email received:', email);
	console.log('Email type:', typeof email);

	// user ache kina check
	const user = await collection.findOne({ email });

	if (!user) {
		return new Response(JSON.stringify({ error: 'Invalid Username ' }), {
			status: 400,
			headers: { 'Content-Type': 'application/json' }
		});
	}

	// Pass mile kina check
	const validPass = await bcrypt.compare(password, user.password);
	if (!validPass) {
		return new Response(JSON.stringify({ error: 'Invalid password' }), {
			status: 400,
			headers: { 'Content-Type': 'application/json' }
		});
	}

	// JWT Auth
	const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: '10h' });

	return new Response(JSON.stringify({ token }), {
		status: 200,
		headers: { 'Content-Type': 'application/json' }
	});
}
