//supplies controller
const oId = require("mongodb").ObjectId;
const base = require("../dataBase/connect");

console.log("Supply Controllers: ");

async function getAllSupplies(req, res) {
  try {
    await base
      .connectToBase("supplies")
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

async function getSupplyByItemName(req, res) {
  try {
    await base
      .connectToBase("supplies")
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

async function getSupplyByInCart(req, res) {
  try {
    await base
      .connectToBase("supplies")
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

async function getSupplyByColor(req, res) {
  try {
    await base
      .connectToBase("supplies")
      .find({ color: req.params.color })
      .toArray()
      .then((result) => {
        res.send(result);
        res.status(200).send(result);
      });
  } catch (err) {
    res.status(500).send(err);
  }
}

async function addSupply(req, res) {
  try {
    await base
      .connectToBase("supplies")
      .insertOne({
        itemName: req.body.itemName,
        stock: req.body.stock,
        inCart: req.body.inCart,
        color: req.body.color,
      })
      .then((item) => {
        console.log(item);
        res.status(201).send(item);
      });
  } catch (e) {
    console.log(`🚫 ${e} 🚫`);
    res.status(500).send(`🚫 ${e} 🚫`);
  }
}

async function updateSupply(req, res) {
  try {
    await base
      .connectToBase("supplies")
      .updateOne(
        {
          _id: new oId(req.params.id),
        },
        {
          $set: {
            itemName: req.body.itemName,
            stock: req.body.stock,
            inCart: req.body.inCart,
            color: req.body.color,
          },
        }
      )
      .then((item) => {
        console.log(item);
        res.status(204).send(item);
      });
  } catch (e) {
    console.log(`🚫 ${e} 🚫`);
    res.status(500).send(`🚫 ${e} 🚫`);
  }
}

async function deleteSupply(req, res) {
  try {
    await base
      .connectToBase("supplies")
      .deleteOne({
        _id: new oId(req.params.id),
      })
      .then((item) => {
        console.log(item);
        res.status(200).send(item);
      });
  } catch (e) {
    console.log(`🚫 ${e} 🚫`);
    res.status(500).send(`🚫 ${e} 🚫`);
  }
}

module.exports = {
  getAllSupplies,
  getSupplyByItemName,
  getSupplyByInCart,
  getSupplyByColor,
  addSupply,
  updateSupply,
  deleteSupply,
};

