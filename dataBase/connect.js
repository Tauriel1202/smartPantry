const dotenv = require("dotenv");
dotenv.config();
const { MongoClient } = require("mongodb");

let _db;

const initDb = (callback) => {
  if (_db) {
    console.log("Database is already initialized");
    return callback(null, _db);
  }
  MongoClient.connect(process.env.MONGODB_URI)
    .then((client) => {
      _db = client.db();
      callback(null, _db);
    })
    .catch((err) => {
      callback(err);
    });
};

const getDb = () => {
  if (!_db) {
    throw Error("Database not initialized");
  }
  return _db;
};

function connectToBase(group) {
  const uri = process.env.MONGO_URI.replace("inventory", group);
  const client = new MongoClient(uri);
  const base = client.db("inventory").collection(group);

  return base;
}

module.exports = {
  initDb,
  getDb,
  connectToBase
};
