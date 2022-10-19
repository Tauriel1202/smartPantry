//food controller
const base = require("../dataBase/connect");

console.log("Food Controllers: ");

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
      .updatetOne({
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

async function deleteFood(req, res) {
   try {
    await base
      .connectToBase("food")
      .deleteOne({
        itemName: req.body.itemName
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

module.exports = { addFood, updateFood, deleteFood };
