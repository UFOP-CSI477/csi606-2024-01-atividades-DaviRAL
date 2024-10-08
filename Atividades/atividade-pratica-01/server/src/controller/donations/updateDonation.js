import { client } from '../../database/client.js'

export class UpdateDonationController {

    async handle(request, response) {

        const { id, pessoa_id, local_id, data } = request.body;

        const doacao = await client.doacoes.update({

            where: {
                id: parseInt(id)
            },
            data: {
                data,
                pessoa: {
                    connect: {
                        id: pessoa_id
                    }
                },
                local: {
                    connect: {
                        id: local_id
                    }
                }

            }

        });

        return response.json(doacao);

    }

}