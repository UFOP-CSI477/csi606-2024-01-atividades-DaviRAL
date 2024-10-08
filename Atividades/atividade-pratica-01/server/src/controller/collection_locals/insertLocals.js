import { client } from '../../database/client.js';

export class InsertLocalController {

    async handle(request, response) {

        const { nome, rua, numero, complemento, cidade_id } = request.body;

        if (!nome) {
            return response.status(400).json({
                message: 'Invalid data. Nome is required.'
            });
        }

        try {
            const local = await client.locais_coleta.create({
                data: {
                    nome,
                    rua,
                    numero,
                    complemento,
                    cidade_id,
                }
            });

            return response.json(local);
        } catch (error) {
            console.error('Error creating local:', error);
            return response.status(500).json({
                message: 'Internal server error.'
            });
        }
    }
}