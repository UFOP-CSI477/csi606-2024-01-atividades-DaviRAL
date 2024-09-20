import { client } from '../../database/client.js';

export class InsertStateController {
    async handle(request, response) {
        try {
            const { nome, sigla } = request.body;
            const state = await client.estados.create({
                data: {
                    nome: nome,
                    sigla: sigla
                }
            });
            return response.json(state);
        } catch (error) {
            console.error(error);
            return response.status(500).json({ error: 'Internal Server Error' });
        }
    }
}