import { client } from '../../database/client.js';

export class InsertTypeController {

    async handle(request, response) {
        
        const { tipo, fator } = request.body;
        if (!tipo && !fator) {
            return response.status(400).json({
                message: 'Invalid data. Tipo and fator are required.'
            });
        }

        try {
            const tipoSanguineo = await client.tipos_sanguineos.create({
                data: {
                    tipo,
                    fator,
                }
            });

            return response.json(tipoSanguineo);
        } catch (error) {
            console.error('Error creating tipo:', error);
            return response.status(500).json({
                message: 'Internal server error.'
            });
        }
    }
}