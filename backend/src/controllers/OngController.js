const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async index (request, response) {
        const ongs = await connection('ong').select('*');
        return response.json(ongs)
    },

    async create(request, response) {
        const {name, email, wpp, city, uf} = request.body;
        const id = crypto.randomBytes(4).toString('HEX');

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