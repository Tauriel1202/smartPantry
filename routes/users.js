//supplies routes
const routes = require("express").Router();
const users = require("../controllers/users");
console.log(users);

//validators
const errorChecker = require("../validation/usersVal");

//get all
routes.get("/", users.getAllUsers);

//add new user
routes.post("/", errorChecker.userCheck, users.addUser);

//get user by username
routes.get(
  "/username/:username",
  errorChecker.usernameCheck,
  users.getUserByUsername
);

//update user by id
routes.put(
  "/:id",
  errorChecker.idCheck,
  errorChecker.userCheck,
  users.updateUser
);

//delete user by id
routes.delete("/:id", errorChecker.idCheck, users.deleteUser);

module.exports = routes;
