import { client } from '../../database/client.js';

export class GetAllPersonsController {
    async handle(request, response) {
        try {
            
            const persons = await client.pessoas.findMany();
            return response.json(persons);
        } catch (error) {
            console.error(error);
            return response.status(500).json({ error: 'Internal Server Error' });
        }
    }
}