require('dotenv').config({
    path: process.env.ENV === 'test' ? '.env' : '.env.test'
});

const express = require('express')

class AppController {
    constructor() {
        this.express = express()
    }

    middlewares() {
        this.express.use(express.json())
    }

    routes() {
        this.express.use(require('./routes'))
    }
}

module.exports = new AppController().express