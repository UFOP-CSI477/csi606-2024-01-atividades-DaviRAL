import { client } from '../../database/client.js';

export class GetStateByIdController {
    async handle(request, response) {
        try {
            const { id } = request.params;
            const state = await client.Estados.findFirstOrThrow({
                where: {
                    id: parseInt(id),
                  },
                });
            return response.json(state);
        } catch (error) {
            console.error(error);
            return response.status(500).json({ error: 'Internal Server Error' });
        }
    }
}