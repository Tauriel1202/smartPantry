//supplies routes
const routes = require('express').Router();
const ordered = require('../controllers/ordered');
console.log(ordered)

//validators <-- to be added


//get all
routes.get('/', ordered.getAllOrders);

//add one
routes.post('/', ordered.addOrder)

//get one - inCart
routes.get('/orderId/:orderId', ordered.getOrderByOrderId);

//get one order by dateOrdered
routes.get('/dateOrdered/:dateOrdered', ordered.getOrderByDateOrdered);

//get one order by eta
routes.get('/eta/:eta', ordered.getOrderByEta);

<<<<<<< HEAD
//update one order by id
routes.put("/:id", ordered.updateOrder)

//delete one order by id
=======

//get one - itemName


//update one - id
routes.put("/:id", ordered.updateOrder)

//delete one - id
>>>>>>> refs/remotes/origin/main
routes.delete("/:id", ordered.deleteOrder);


module.exports = routes;