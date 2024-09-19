import { client } from '../../database/client.js';

export class InsertStateController {
    async handle(request, response) {
        try {
            const { name, uf } = request.body;
            const state = await client.estados.create({
                data: {
                    nome: name,
                    uf: uf
                }
            });
            return response.json(state);
        } catch (error) {
            console.error(error);
            return response.status(500).json({ error: 'Internal Server Error' });
        }
    }
}