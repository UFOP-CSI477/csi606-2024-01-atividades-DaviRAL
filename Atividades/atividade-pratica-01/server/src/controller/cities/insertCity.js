import { client } from '../../database/client.js'

export class InsertCityController {

    async handle(request, response) {
        
        const { nome, estado_id } = request.body;

        // Validar se o estado_id existe.
        try {
            await client.estados.findFirstOrThrow({
                where: {
                    id: parseInt(estado_id)
                }
            })
            
        } catch (error) {
            return response.status(400).json({
                message: 'Invalid request.', 
                error
            })
        }

        const cidade = await client.cidades.create({
            data: {
                nome,
                // estado_id
                estado: {
                    connect: {
                        id: parseInt(estado_id)
                    }
                }
            }
        })

        return response.status(201).json(cidade);
    }
}