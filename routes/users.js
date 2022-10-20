//supplies routes
const routes = require('express').Router();
const users = require('../controllers/users');
console.log(users)

//validators <-- to be added


<<<<<<< HEAD
//get all
routes.get('/', users.getAllUsers)

//add one
=======
//get all users
routes.get('/', users.getAllUsers);

//add new user
>>>>>>> 2aab5430b0a9e42f6144e9a038fe330242d6ac8d
routes.post('/', users.addUser)

//get user by username
routes.get('/username/:username', users.getUserByUsername);

//update user by id
routes.put("/:id", users.updateUser)

//delete user by id
routes.delete("/:id", users.deleteUser);

module.exports = routes;