import { client } from '../../database/client.js';

export class GetTypeByIdController {
    async handle(request, response) {
        try {
            const { id } = request.params;
            const tipo = await client.tipos_sanguineos.findFirstOrThrow({
                where: {
                    id: parseInt(id),
                  },
                });
            return response.json(tipo);
        } catch (error) {
            console.error(error);
            return response.status(500).json({ error: 'Internal Server Error' });
        }
    }
}