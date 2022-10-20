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

// //supply routes
const supplies = require('./supplies')
routes.use('/supplies', supplies)

//order routes
const orders = require('./ordered')
routes.use('/ordered', orders)

//user routes
const users = require('./users')
routes.use('/users', users)

module.exports = routes;