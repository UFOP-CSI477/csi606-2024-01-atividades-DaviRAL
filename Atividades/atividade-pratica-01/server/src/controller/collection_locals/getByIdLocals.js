import { client } from '../../database/client.js';

export class GetLocalsByIdController {
    async handle(request, response) {
        try {
            const { id } = request.params;
            const locals = await client.locais_coleta.findFirstOrThrow({
                where: {
                    id: parseInt(id),
                  },
                });
            return response.json(locals);
        } catch (error) {
            console.error(error);
            return response.status(500).json({ error: 'Internal Server Error' });
        }
    }
}