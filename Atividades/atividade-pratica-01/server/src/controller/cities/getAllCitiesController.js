import { client } from '../../database/client.js';

export class GetAllCitiesController {
    async handle(request, response) {
        try {
            
            const cities = await client.Cidades.findMany();
            return response.json(cities);
        } catch (error) {
            console.error(error);
            return response.status(500).json({ error: 'Internal Server Error' });
        }
    }
}