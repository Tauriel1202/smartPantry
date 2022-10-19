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


//update one - id
routes.put("/:id", ordered.updateOrder)

//delete one - id
routes.delete("/:id", ordered.deleteOrder);


module.exports = routes;