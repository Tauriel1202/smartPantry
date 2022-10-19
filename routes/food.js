//food routes
const routes = require('express').Router();
const food = require('../controllers/food');
console.log(food)

//validators <-- to be added


//get all


//add one
routes.post('/', food.addFood)

//get one - inCart


//get one - cat


//get one - itemName


//update one - itemName
routes.put("/:id", food.updateFood)

//delete one - itemName
routes.delete("/:id",  food.deleteFood);

module.exports = routes;