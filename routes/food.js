//food routes
const routes = require('express').Router();
const food = require('../controllers/food');
console.log(food)

//validators <-- to be added


//get all food
routes.get('/', food.getAllFood);

//add one new food
routes.post('/', food.addFood)

//get one - inCart
routes.get('/inCart/:inCart', food.getFoodByInCart);

//get one - cat
routes.get('/cat/:cat', food.getFoodByCat);

//get one - itemName
routes.get('/itemName/:itemName', food.getFoodByItemName);

//update one - itemName
routes.put("/:id", food.updateFood)

//delete one - itemName
routes.delete("/:id",  food.deleteFood);

module.exports = routes;