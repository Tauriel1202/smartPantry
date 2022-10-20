//users controller
const base = require("../dataBase/connect");
const oId = require("mongodb").ObjectId;

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

async function getUser(req, res) {
  await base
    .connectToBase("users")
    .find()
    .toArray()
    .then((all) => {
      console.log(all);
      res.status(200).send(all);
    });
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

async function updateUser(req, res) {
  try {
    await base
      .connectToBase("users")
      .updateOne(
        {
          _id: new oId(req.params.id),
        },
        {
          $set: {
            username: req.body.username,
            email: req.body.email,
          },
        }
      )
      .then((user) => {
        console.log(user);
        res.status(204).send(user);
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
      .deleteOne({
        _id: new oId(req.params.id),
      })
      .then((user) => {
        console.log(user);
        res.status(200).send(user);
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


