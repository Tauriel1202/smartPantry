//food controller
const base = require("../dataBase/connect");
const oId = require("mongodb").ObjectId;

console.log("Food Controllers: ");

async function getAllFood(req, res) {
  try {
    await base
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

async function getFoodByCat(req, res) {
  try {
    await base
      .find({ category: req.params.category })
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
  try {
    await base
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
  try {
    await base
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

async function addFood(req, res) {
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

async function updateFood(req, res) {
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




