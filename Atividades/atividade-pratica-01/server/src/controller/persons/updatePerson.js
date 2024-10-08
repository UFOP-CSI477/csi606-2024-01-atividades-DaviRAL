import { client } from '../../database/client.js';

export class UpdatePersonController {

    async handle(request, response) {

        const { id, nome, rua, numero, complemento, rg, cidade_id, tipo_id } = request.body;

        const person = await client.pessoas.update({

            where: {
                id: parseInt(id)
            },
            data: {
                nome,
                rua,
                numero,
                complemento,
                rg,
                cidade: {
                    connect: {
                        id: cidade_id
                    }
                },
                tipo: {
                    connect: {
                        id: tipo_id
                    }
                }

            }

        });

        return response.json(person);

    }

}