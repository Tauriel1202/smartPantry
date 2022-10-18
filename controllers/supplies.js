//supplies controller
const { MongoClient, ObjectId } = require("mongodb");
const uri = process.env.MONGO_URI.replace("inventory", "supplies");
const client = new MongoClient(uri);
const base = client.db("inventory").collection("supplies");

console.log("Supply Controllers: ");

async function addSupply(req, res) {
  try {
    await base
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

module.exports = { addSupply };
