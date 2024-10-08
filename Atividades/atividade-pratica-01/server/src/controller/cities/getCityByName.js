import { client } from '../../database/client.js';

export class GetCityByNameController {
    async handle(request, response) {
        try {
            const { nome } = request.params; 

            if (!nome) {
                return response.status(400).json({ error: 'Nome query parameter is required' });
            }

            const city = await client.cidades.findFirstOrThrow({
                where: {
                    nome:nome
                }
            });
            console.log(city);
            return response.json(city);
        } catch (error) {
            if (error.name === 'NotFoundError') {
                return response.status(404).json({ error: 'City not found' });
            }
            console.error(error);
            return response.status(500).json({ error: 'Internal Server Error' });
        }
    }
}