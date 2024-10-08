import { client } from '../../database/client.js';

export class GetCityByIdController {
    async handle(request, response) {
        try {
            const { id } = request.params;
            const city = await client.Cidades.findFirstOrThrow({
                where: {
                    id: parseInt(id),
                  },
                });
            return response.json(city);
        } catch (error) {
            console.error(error);
            return response.status(500).json({ error: 'Internal Server Error' });
        }
    }
}