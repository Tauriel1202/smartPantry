//food controller
const { MongoClient, ObjectId } = require("mongodb");
const uri = process.env.MONGO_URI.replace("inventory", "food");
const client = new MongoClient(uri);
const base = client.db("inventory").collection("food");

console.log("Food Controllers: ");

async function addFood(req, res) {
  try {
    await base
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

module.exports = { addFood };
