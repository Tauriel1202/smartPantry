const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('🏹Hello Team!🌠');
});

//swagger
const swagger = require('./swagger')
routes.use('/', swagger)

//food routes
const food = require('./food')
routes.use('/food', food)

module.exports = routes;