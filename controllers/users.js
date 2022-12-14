//users controller
const { validationResult } = require('express-validator')
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
        console.log(result);
        res.status(200).send(result);
      });
  } catch (err) {
    res.status(500).send(err);
  }
}

async function addUser(req, res) {
  const errors = validationResult(req);
  console.log(errors);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  
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
  const errors = validationResult(req);
  console.log(errors);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  
  try {
    await base
      .connectToBase("users")
      .find({ username: req.params.username })
      .toArray()
      .then((result) => {
        console.log(result);
        res.status(200).send(result);
      });
  } catch (err) {
    res.status(500).send(err);
  }
}

async function updateUser(req, res) {
  const errors = validationResult(req);
  console.log(errors);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  
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
  const errors = validationResult(req);
  console.log(errors);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  
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
