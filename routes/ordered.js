//supplies routes
const routes = require('express').Router();
const ordered = require('../controllers/ordered');
console.log(ordered)

//validators 
const errorChecker = require('../validation/ordersVal')

//get all
routes.get('/', ordered.getAllOrders);

//add one
routes.post('/', errorChecker.orderChecker, ordered.addOrder)

//get one order by dateOrdered
routes.get('/dateOrdered/:dateOrdered', errorChecker.dateOrderedCheck, ordered.getOrderByDateOrdered);

//get one order by eta
routes.get('/eta/:eta', errorChecker.etaCheck, ordered.getOrderByEta);

//get one - id
routes.get('/:id', ordered.getOrderByOrderId);

//update one - id
routes.put("/:id", errorChecker.idCheck, errorChecker.orderChecker, ordered.updateOrder)

//delete one - id
routes.delete("/:id", errorChecker.idCheck, ordered.deleteOrder);

module.exports = routes;