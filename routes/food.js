//food routes
const routes = require('express').Router();
const food = require('../controllers/food');
console.log(food)

//validators <-- to be added


//get all
routes.post('/', food.addFood)

//add one


//get one - inCart


//get one - cat


//get one - itemName


//update one - itemName


//delete one - itemName


module.exports = routes;