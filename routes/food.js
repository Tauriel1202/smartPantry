//food routes
const routes = require("express").Router();
const food = require("../controllers/food");
console.log(food);

//validators <-- to be added
const errorChecker = require("../validation/foodVal");

//get all food
routes.get("/", food.getAllFood);

//add one new food
routes.post("/", errorChecker.foodCheck, food.addFood);

//get one - inCart
routes.get("/inCart/:inCart", errorChecker.inCartCheck, food.getFoodByInCart);

//get one - cat
routes.get("/cat/:cat", errorChecker.catCheck, food.getFoodByCat);

//get one - itemName
routes.get("/itemName/:itemName", errorChecker.itemNameCheck, food.getFoodByItemName);

//update one - id
routes.put("/:id", errorChecker.idCheck, errorChecker.foodCheck, food.updateFood);

//delete one - id
routes.delete("/:id", errorChecker.idCheck, food.deleteFood);

module.exports = routes;
