//supplies routes
const routes = require('express').Router();
const supplies = require('../controllers/supplies');
console.log(supplies)

//validators <-- to be added


//get all
routes.get('/', supplies.getAllSupplies);

//add one
routes.post('/', supplies.addSupply)

//get one - inCart
routes.get('/inCart/:inCart', supplies.getSupplyByInCart);

//get one - color
routes.get('/color/:color', supplies.getSupplyByColor);

//get one - itemName
routes.get('/itemName/:itemName', supplies.getSupplyByItemName);

//update one - itemName
routes.put("/:id", supplies.updateSupply)

//delete one - itemName
routes.delete("/:id", supplies.deleteSupply);


module.exports = routes;