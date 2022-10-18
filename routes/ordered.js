//supplies routes
const routes = require('express').Router();
const ordered = require('../controllers/ordered');
console.log(ordered)

//validators <-- to be added


//get all


//add one
routes.post('/', ordered.addOrder)

//get one - inCart


//get one - color


//get one - itemName


//update one - itemName


//delete one - itemName


module.exports = routes;