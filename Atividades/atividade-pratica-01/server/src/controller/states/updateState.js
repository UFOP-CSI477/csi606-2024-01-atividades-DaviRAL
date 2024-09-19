import { client } from '../../database/client.js';

export class UpdateStateController {
    async handle(request, response) {
        try {
            const { id } = request.params;
            const { nome, sigla} = request.body;
            const state = await client.estados.update({
                where: {
                    id: Number(id)
                },
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
