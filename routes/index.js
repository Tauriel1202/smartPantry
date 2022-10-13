const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('🏹Hello Team!🌠');
});

const swagger = require('./swagger')
routes.use('/', swagger)

module.exports = routes;