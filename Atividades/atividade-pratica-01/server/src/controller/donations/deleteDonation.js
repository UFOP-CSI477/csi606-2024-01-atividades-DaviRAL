import { client } from '../../database/client.js';

export class DeleteDonationController {
    async handle(request, response) {
        try {
            const { id } = request.params;
            const local = await client.doacoes.delete({
                where: {
                    id: Number(id)
                }
            });
            return response.status(204).send();
        } catch (error) {
            console.error(error);
            return response.status(500).json({ error: 'Internal Server Error' });
        }
    }
}