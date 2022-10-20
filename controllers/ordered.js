//orders controller
const base = require("../dataBase/connect");

console.log("Orders Controllers: ");

async function getAllOrders(req, res) {
  try {
    await base
      .connectToBase("ordered")
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

async function getOrderByOrderId(req, res) {
  try {
    await base
      .connectToBase("ordered")
      .find({ orderId: req.params.orderId })
      .toArray()
      .then((result) => {
        res.send(result);
        res.status(200).send(result);
      });
  } catch (err) {
    res.status(500).send(err);
  }
}

async function getOrderByDateOrdered(req, res) {
  try {
    await base
      .connectToBase("ordered")
      .find({ dateOrdered: req.params.dateOrdered })
      .toArray()
      .then((result) => {
        res.send(result);
        res.status(200).send(result); 
      });
  } catch (err) {
    res.status(500).send(err);
  }
}

async function getOrderByEta(req, res) {
  try {
    await base
      .connectToBase("ordered")
      .find({ eta: req.params.eta })
      .toArray()
      .then((result) => {
        res.send(result);
        res.status(200).send(result);
      });
  } catch (err) {
    res.status(500).send(err);
  }
}

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

module.exports = {
  getAllOrders,
  getOrderByOrderId,
  getOrderByDateOrdered,
  getOrderByEta,
  addOrder,
  updateOrder,
  deleteOrder,
};
