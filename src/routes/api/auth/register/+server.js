import { connectToDatabase } from '../../../../lib';
import bcrypt from 'bcrypt';

export async function POST({ request, response }) {
	try {
		const { db } = await connectToDatabase();
		const collection = db.collection('Authentication');

		const {
			firstName,
			lastName,
			company,
			industry,
			country,
			countrycode,
			email,
			password,
			confirmPass,
			walletAddress
		} = await request.json();

		console.log('Received Registration Data:', {
			firstName,
			lastName,
			company,
			industry,
			country,
			countrycode,
			email,
			password,
			confirmPass,
			walletAddress
		});

		if (password !== confirmPass) {
			console.log('Passwords do not match');
			return new Response(JSON.stringify({ error: 'Passwords do not match' }), {
				status: 400,
				headers: { 'Content-Type': 'application/json' }
			});
		}

		const userExist = await collection.findOne({ email });

		if (userExist) {
			console.log('Email already exists');
			return new Response(
				JSON.stringify({
					error: 'Email already exists'
				}),
				{
					status: 400,
					headers: { 'Content-Type': 'application/json' }
				}
			);
		}

		const hashPass = await bcrypt.hash(password, 10);
		const result = await collection.insertOne({
			firstName,
			lastName,
			company,
			industry,
			country,
			countrycode,
			email,
			password: hashPass,
			walletAddress,
			insertDate: new Date()
		});

		console.log('User registered successfully:', result);

		return new Response(JSON.stringify(result), {
			status: 201,
			headers: { 'Content-Type': 'application/json' }
		});
	} catch (error) {
		console.error('Registration Error:', error);
		return new Response(JSON.stringify({ error: 'Registration failed' }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' }
		});
	}
}
