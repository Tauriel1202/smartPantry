//supplies routes
const routes = require('express').Router();
const supplies = require('../controllers/supplies');
console.log(supplies)

//validators <-- to be added


//get all


//add one
routes.post('/', supplies.addSupply)

//get one - inCart


//get one - color


//get one - itemName

//update one - itemName
routes.put("/:id", supplies.updateSupply)

//delete one - itemName
routes.delete("/:id", supplies.deleteSupply);


module.exports = routes;