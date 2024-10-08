import { client } from '../../database/client.js';

export class GetPersonByIdController {
    async handle(request, response) {
        try {
            const { id } = request.params;
            const pessoa = await client.pessoas.findFirstOrThrow({
                where: {
                    id: parseInt(id),
                  },
                });
            return response.json(pessoa);
        } catch (error) {
            console.error(error);
            return response.status(500).json({ error: 'Internal Server Error' });
        }
    }
}