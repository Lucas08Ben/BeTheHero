const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')

describe('ONG!', () => {
    beforeEach(async () => {
        await connection.migrate.latest();
    });

    it('shoud be able to create a new ONG', async () => {
        const response = await request(app).post('/ongs').send({
            name: "Mãe Júlia",
            email: "julia",
            wpp: "8835185555",
            city: "São José",
            uf: "CE"
        })
    });

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
});