import { client } from '../../database/client.js';

export class UpdateStateController {
    async handle(request, response) {

        const { id, nome, sigla } = request.body

        const state = await client.estados.update({

            where: {
                id
            },

            data: {
                nome, 
                sigla
            }

        })

        return response.json(state)

    }

}
