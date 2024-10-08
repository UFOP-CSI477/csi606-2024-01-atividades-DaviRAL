import { client } from '../../database/client.js';

export class UpdateTypeController {
    async handle(request, response) {
        try {
            const { id } = request.params;
            const { tipo, fator} = request.body;
            const tiposanguineo = await client.tipos_sanguineos.update({
                where: {
                    id: Number(id)
                },
                data: {
                    tipo: tipo,
                    fator: fator
                }
            });
            return response.json(tiposanguineo);
        } catch (error) {
            console.error(error);
            return response.status(500).json({ error: 'Internal Server Error' });
        }
    }
}