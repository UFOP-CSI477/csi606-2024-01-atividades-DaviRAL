import { client } from '../../database/client.js';

export class GetAllLocalsController {
    async handle(request, response) {
        try {
            
            const locals = await client.locais_coleta.findMany();
            return response.json(locals);
        } catch (error) {
            console.error(error);
            return response.status(500).json({ error: 'Internal Server Error' });
        }
    }
}