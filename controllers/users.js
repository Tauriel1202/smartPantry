//users controller
const { MongoClient, ObjectId } = require("mongodb");
const uri = process.env.MONGO_URI.replace("inventory", "users");
const client = new MongoClient(uri);
const base = client.db("inventory").collection("users");

console.log("User Controllers: ");

async function addUser(req, res) {
  try {
    await base
      .insertOne({
        username: req.body.username,
        email: req.body.email,
      })
      .then((user) => {
        console.log(user);
        res.status(201).send(user);
      });
  } catch (e) {
    console.log(`🚫 ${e} 🚫`);
    res.status(500).send(`🚫 ${e} 🚫`);
  }
}

module.exports = { addUser };
