//food controller
const { validationResult } = require("express-validator");
const base = require("../dataBase/connect");
const oId = require("mongodb").ObjectId;

console.log("Food Controllers: ");

async function getAllFood(req, res) {
  try {
    await base
      .connectToBase("food")
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

async function addFood(req, res) {
  const errors = validationResult(req);
  console.log(errors);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    await base
      .connectToBase("food")
      .insertOne({
        cat: req.body.cat,
        itemName: req.body.itemName,
        stock: req.body.stock,
        inCart: req.body.inCart,
      })
      .then((food) => {
        console.log(food);
        res.status(201).send(food);
      });
  } catch (e) {
    console.log(`🚫 ${e} 🚫`);
    res.status(500).send(`🚫 ${e} 🚫`);
  }
}

async function getFoodByCat(req, res) {
  const errors = validationResult(req);
  console.log(errors);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    await base
      .connectToBase("food")
      .find({ cat: req.params.cat })
      .toArray()
      .then((result) => {
        res.send(result);
        res.status(200).send(result);
      });
  } catch (err) {
    res.status(500).send(err);
  }
}

async function getFoodByItemName(req, res) {
  const errors = validationResult(req);
  console.log(errors);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    await base
      .connectToBase("food")
      .find({ itemName: req.params.itemName })
      .toArray()
      .then((result) => {
        res.send(result);
        res.status(200).send(result);
      });
  } catch (err) {
    res.status(500).send(err);
  }
}

async function getFoodByInCart(req, res) {
  const errors = validationResult(req);
  console.log(errors);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    await base
      .connectToBase("food")
      .find({ inCart: req.params.inCart })
      .toArray()
      .then((result) => {
        res.send(result);
        res.status(200).send(result);
      });
  } catch (err) {
    res.status(500).send(err);
  }
}

async function updateFood(req, res) {
  const errors = validationResult(req);
  console.log(errors);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    await base
      .connectToBase("food")
      .updateOne(
        {
          _id: new oId(req.params.id),
        },
        {
          $set: {
            cat: req.body.cat,
            itemName: req.body.itemName,
            stock: req.body.stock,
            inCart: req.body.inCart,
          },
        }
      )
      .then((food) => {
        console.log(food);
        res.status(204).send(food);
      });
  } catch (e) {
    console.log(`🚫 ${e} 🚫`);
    res.status(500).send(`🚫 ${e} 🚫`);
  }
}

async function deleteFood(req, res) {
  const errors = validationResult(req);
  console.log(errors);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  
  try {
    await base
      .connectToBase("food")
      .deleteOne({
        _id: new oId(req.params.id),
      })
      .then((food) => {
        console.log(food);
        res.status(200).send(food);
      });
  } catch (e) {
    console.log(`🚫 ${e} 🚫`);
    res.status(500).send(`🚫 ${e} 🚫`);
  }
}

module.exports = {
  getAllFood,
  getFoodByCat,
  getFoodByItemName,
  getFoodByInCart,
  addFood,
  updateFood,
  deleteFood,
};
