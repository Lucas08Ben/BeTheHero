const generateUniqueId = require('../utils/generateUniqueId')
const connection = require('../database/connection');

module.exports = {
    async index (request, response) {
        const ongs = await connection('ong').select('*');
        return response.json(ongs)
    },

    async create(request, response) {
        const {name, email, wpp, city, uf} = request.body;
        const id = generateUniqueId();

        await connection('ong').insert({
            id,
            name,
            email,
            wpp,
            city,
            uf
        });
        return response.json({ id });
    }
};