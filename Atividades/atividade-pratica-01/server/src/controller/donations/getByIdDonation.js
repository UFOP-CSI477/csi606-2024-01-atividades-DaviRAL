import { client } from '../../database/client.js';

export class GetDonationByIdController {
    async handle(request, response) {
        try {
            const { id } = request.params;
            const donation = await client.doacoes.findFirstOrThrow({
                where: {
                    id: parseInt(id),
                  },
                });
            return response.json(donation);
        } catch (error) {
            console.error(error);
            return response.status(500).json({ error: 'Internal Server Error' });
        }
    }
}