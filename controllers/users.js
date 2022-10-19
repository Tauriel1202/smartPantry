//users controller
const base = require("../dataBase/connect");

console.log("User Controllers: ");

async function addUser(req, res) {
  try {
    await base
      .connectToBase("users")
      .insertOne({
        username: req.body.username,
        email: req.body.email,
      })
      .then((user) => {
        console.log(user);
        res.status(201).send(user);
      });
  } catch (e) {
    console.log(`🚫 ${e} 🚫`);
    res.status(500).send(`🚫 ${e} 🚫`);
  }
}

async function updateUser(req, res) {
  try {
    await base
      .connectToBase("users")
      .insertOne({
        username: req.body.username,
        email: req.body.email,
      })
      .then((user) => {
        console.log(user);
        res.status(201).send(user);
      });
  } catch (e) {
    console.log(`🚫 ${e} 🚫`);
    res.status(500).send(`🚫 ${e} 🚫`);
  }
}

async function deleteUser(req, res) {
  try {
    await base
      .connectToBase("users")
      .insertOne({
        username: req.body.username,
      })
      .then((user) => {
        console.log(user);
        res.status(201).send(user);
      });
  } catch (e) {
    console.log(`🚫 ${e} 🚫`);
    res.status(500).send(`🚫 ${e} 🚫`);
  }
}

module.exports = { addUser, updateUser, deleteUser };
