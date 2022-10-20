//users controller
const base = require("../dataBase/connect");

console.log("User Controllers: ");

async function getAllUsers(req, res) {
  try {
    await base
      .connectToBase("users")
      .find()
      .toArray()
      .then((result) => {
        res.send(result);
        res.status(200).send(result);
      });
  } catch (err) {
    res.status(500).send(err);
  }
}

async function getUserByUsername(req, res) {
  try {
    await base
      .connectToBase("users")
      .find({ username: req.params.username })
      .toArray()
      .then((result) => {
        res.send(result);
        res.status(200).send(result);
      });
  } catch (err) {
    res.status(500).send(err);
  }
}

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

module.exports = {
  getAllUsers,
  getUserByUsername,
  addUser,
  updateUser,
  deleteUser,
};


