//supplies routes
const routes = require('express').Router();
const users = require('../controllers/users');
console.log(users)

//validators <-- to be added


//get all
routes.get('/', users.getUser)

//add one
routes.post('/', users.addUser)

//get one - inCart


//get one - color


//get one - itemName


//update one - itemName
routes.put("/:id", users.updateUser)

//delete one - itemName
routes.delete("/:id", users.deleteUser);

module.exports = routes;