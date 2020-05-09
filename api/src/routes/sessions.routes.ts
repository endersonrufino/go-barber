import { Router } from 'express';

const sessions = Router();

sessions.post('/', async (request, response) => {
	try {
		return response.send();
	} catch (error) {
		return response.status(400).json({ error: error.message });
	}
});

export default sessions;
