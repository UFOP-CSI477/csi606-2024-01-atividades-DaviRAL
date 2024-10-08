
import { client } from '../../database/client.js'

export class UpdateLocalController {

    async handle(request, response) {

        const { id, nome, rua, numero, complemento, cidade_id } = request.body;

        const local = await client.locais_coleta.update({

            where: {
                id: parseInt(id)
            },
            data: {
                nome,
                rua,
                numero,
                complemento,
                cidade: {
                    connect: {
                        id: cidade_id
                    }
                },

            }

        });

        return response.json(local);

    }

}