//orders controller
const { MongoClient, ObjectId } = require("mongodb");
const uri = process.env.MONGO_URI.replace("inventory", "ordered");
const client = new MongoClient(uri);
const base = client.db("inventory").collection("ordered");

console.log("Orders Controllers: ");

async function addOrder(req, res) {
  try {
    await base
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

module.exports = { addOrder };
