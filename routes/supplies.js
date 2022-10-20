//supplies routes
const routes = require('express').Router();
const supplies = require('../controllers/supplies');
console.log(supplies)

//validators <-- to be added
const errorChecker = require('../validation/supplyVal')

//get all
routes.get('/', supplies.getAllSupplies);

//add one
routes.post('/', errorChecker.supplyCheck, supplies.addSupply)

//get one - inCart
routes.get('/inCart/:inCart', errorChecker.inCartCheck, supplies.getSupplyByInCart);

//get one - color
routes.get('/color/:color', errorChecker.colorCheck, supplies.getSupplyByColor);

//get one - itemName
routes.get('/itemName/:itemName', errorChecker.itemNameCheck, supplies.getSupplyByItemName);

//update one - itemName
routes.put("/:id", errorChecker.idCheck, errorChecker.supplyCheck, supplies.updateSupply)

//delete one - itemName
routes.delete("/:id", errorChecker.idCheck, supplies.deleteSupply);


module.exports = routes;