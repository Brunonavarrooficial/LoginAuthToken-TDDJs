const request = require('supertest')
const { User } = require('../../src/app/models')

const truncate = require('../utils/truncate')
const app = require('../../src/app')

/*
--> Teste 1 com jest no sqlite:
describe('Authentication', () => {
    it('should receive JWT token when authenticated with valid credentials', async () => {
        const user = await User.create({
            name: 'bruno',
            email: 'bnacessoria@gmail.com',
            password_hash: '123123'
        })
        console.log(user)

        expect(user.email).toBe('bnacessoria@gmail.com')
    })
})*/

describe('Authentication', () => {
    beforeEach(async () => {
        await truncate()
    })

    it('should authenticate with  valid credencials', async () => {
        const user = await User.create({
            name: 'Bruno',
            email: 'bnacessoria@gmail.com',
            passoword: '123456',
        })

        const response = await request(app)
            .post('/sessions')
            .send({
                email: user.email,
                password: '123456'
            })

        expect(response.status).toBe(200)
    })

    it('should not authenticate with invalid credentiials', async () => {
        const user = await User.create({
            name: 'Bruno',
            email: 'bnacessoria@gmail.com',
            passoword: '123456',
        })

        const response = await request(app)
            .post('/sessions')
            .send({
                email: user.email,
                password: '123123'
            })

        expect(response.status).toBe(401)
    })
})


