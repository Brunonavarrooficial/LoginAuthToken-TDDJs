const faker = require('faker')
const { factoty } = require('factory-girl')
const { user } = require('../src/app/models')

factory.define('User', User, {
    name: faker.name.findName(),
    email: faker.internet.email(),
    password: faker.internet.password()
})

module.exports = factoty

