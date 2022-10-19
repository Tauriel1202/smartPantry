//orders controller
const base = require("../dataBase/connect");

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
      .insertOne({
        orderName: req.body.orderId,
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

async function deleteOrder(req, res) {
  try {
    await base
      .connectToBase("ordered")
      .insertOne({
        itemName: req.body.itemName,
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
module.exports = { addOrder, updateOrder, deleteOrder };
