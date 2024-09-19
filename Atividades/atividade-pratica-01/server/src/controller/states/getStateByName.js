import { client } from '../../database/client.js';

export class GetStateByNameController {
    async handle(request, response) {
        try {
            const { nome } = request.query; 

            if (!nome) {
                return response.status(400).json({ error: 'Nome query parameter is required' });
            }

            const state = await client.estados.findFirstOrThrow({
                where: {
                    nome:{
                        equals: nome,
                        mode: 'insensitive'
                    }
                }
            });
            console.log(state);
            return response.json(state);
        } catch (error) {
            if (error.name === 'NotFoundError') {
                return response.status(404).json({ error: 'State not found' });
            }
            console.error(error);
            return response.status(500).json({ error: 'Internal Server Error' });
        }
    }
}