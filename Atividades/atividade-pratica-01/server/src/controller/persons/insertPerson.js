import { client } from '../../database/client.js';

export class InsertPersonController {

    async handle(request, response) {

        const { nome, rua, numero, complemento, rg, cidade_id, tipo_id } = request.body;

        if (!nome && !rg) {
            return response.status(400).json({
                message: 'Invalid data. Nome and rg are required.'
            });
        }

        try {
            const pessoa = await client.pessoas.create({
                data: {
                    nome,
                    rua,
                    numero,
                    complemento,
                    rg,
                    cidade_id,
                    tipo_id,
                }
            });

            return response.json(pessoa);
        } catch (error) {
            console.error('Error creating pessoa:', error);
            return response.status(500).json({
                message: 'Internal server error.'
            });
        }
    }
}