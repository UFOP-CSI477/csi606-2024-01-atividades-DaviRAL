import { client} from '../../database/client.js';

export class GetAllBlood_TypeController {
    async handle(request, response) {
        try {
            
            const tipos = await client.tipos_sanguineos.findMany();
            return response.json(tipos);
        } catch (error) {
            console.error(error);
            return response.status(500).json({ error: 'Internal Server Error' });
        }
    }
}