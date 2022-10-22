const { check, validationResult } = require("express-validator");

function errorReturn(req, res, test) {
  const errors = validationResult(test);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  } else {
    res.status(200);
    res.send("🏹 Carry on... 🎯");
  }
}

const idCheck = [
  check("id", "Must be 24 characters long.").isLength(24)
];

const catCheck = [
  check(
    "cat",
    "What type is your food item: fruit, vegetable, meat..."
  ).notEmpty().isLength({min: 2})
];

const inCartCheck = [
  check("inCart", "Enter a cart status.").isLength({min: 2}),
  check("inCart", "Must be a boolean.").isBoolean(),
];

const itemNameCheck = [
  check("itemName", "The name of your item is required.").isLength({min: 2}),
];

const foodCheck = [
  catCheck,
  itemNameCheck,
  check("stock", "Stock must be an integer.").isInt(),
  inCartCheck,
];

module.exports = {
  errorReturn,
  idCheck,
  catCheck,
  itemNameCheck,
  inCartCheck,
  foodCheck,
};
