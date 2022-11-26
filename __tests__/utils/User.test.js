const bcrypt = require('bcryptjs')
const { INET } = require('sequelize')

const { User } = require('../../src/app/models')
const truncate = require('../../__tests__/utils/truncate')

describe('User', () => {
    beforeEach(async () => {
        await truncate()
    })

    it('should encrypt user password', async () => {
        const user = await User.create({
            name: 'Bruno',
            email: 'bruno@gmail.com',
            password: '123456'
        })
        const compareHash = await bcrypt.compare('123456', user.password_hash)

        expect(compareHash).toBe(true)
    })
})
