import { client } from '../../database/client.js';

export class GetAllStatesController {
    async handle(request, response) {
        try {
            
            const states = await client.Estados.findMany();
            return response.json(states);
        } catch (error) {
            console.error(error);
            return response.status(500).json({ error: 'Internal Server Error' });
        }
    }
}