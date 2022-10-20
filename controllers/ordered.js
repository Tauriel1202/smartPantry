//orders controller
const base = require("../dataBase/connect");
const oId = require("mongodb").ObjectId;

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

async function addOrder(req, res) {
  const errors = validationResult(req);
  console.log(errors);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

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

async function getOrderByOrderId(req, res) {
  const errors = validationResult(req);
  console.log(errors);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  
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
  const errors = validationResult(req);
  console.log(errors);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  
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
  const errors = validationResult(req);
  console.log(errors);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  
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

async function updateOrder(req, res) {
  const errors = validationResult(req);
  console.log(errors);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  
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
  const errors = validationResult(req);
  console.log(errors);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  
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

module.exports = {
  getAllOrders,
  getOrderByOrderId,
  getOrderByDateOrdered,
  getOrderByEta,
  addOrder,
  updateOrder,
  deleteOrder,
};
