import { client } from '../../database/client.js'

export class UpdateCityController {

    async handle(request, response) {

        const { id, nome, estado_id } = request.body;

        const city = await client.cidades.update({

            where: {
                id: parseInt(id)
            },
            data: {
                nome,
                estado: {
                    connect: {
                        id: estado_id
                    }
                }

            }

        });

        return response.json(city);

    }

}