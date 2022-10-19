//orders controller
const base = require("../dataBase/connect");
const oId = require("mongodb").ObjectId;

console.log("Orders Controllers: ");

async function addOrder(req, res) {
  try {
    await base
      .connectToBase("ordered")
      .insertOne({
        itemName: req.body.itemName,
        quantityOrdered: req.body.quantityOrdered,
        color: req.body.color,
        dateOrdered: req.body.dateOrdered,
        eta: req.body.eta,
        price: req.body.price,
        gift: req.body.gift,
      })
      .then((order) => {
        console.log(order);
        res.status(201).send(order);
      });
  } catch (e) {
    console.log(`🚫 ${e} 🚫`);
    res.status(500).send(`🚫 ${e} 🚫`);
  }
}

async function updateOrder(req, res) {
  try {
    await base
      .connectToBase("ordered")
      .updateOne(
        {
          _id: new oId(req.params.id),
        },
        {
          $set: {
            itemName: req.body.itemName,
            quantityOrdered: req.body.quantityOrdered,
            color: req.body.color,
            dateOrdered: req.body.dateOrdered,
            eta: req.body.eta,
            price: req.body.price,
            gift: req.body.gift,
          },
        }
      )
      .then((order) => {
        console.log(order);
        res.status(204).send(order);
      });
  } catch (e) {
    console.log(`🚫 ${e} 🚫`);
    res.status(500).send(`🚫 ${e} 🚫`);
  }
}

async function deleteOrder(req, res) {
  try {
    await base
      .connectToBase("ordered")
      .deleteOne({
        _id: new oId(req.params.id),
      })
      .then((order) => {
        console.log(order);
        res.status(200).send(order);
      });
  } catch (e) {
    console.log(`🚫 ${e} 🚫`);
    res.status(500).send(`🚫 ${e} 🚫`);
  }
}
module.exports = { addOrder, updateOrder, deleteOrder };
