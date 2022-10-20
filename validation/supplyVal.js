const { check, validationResult } = require("express-validator");
const { inCartCheck, itemNameCheck } = require("../validation/foodVal");

function errorReturn(req, res, test) {
  const errors = validationResult(test);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  } else {
    res.status(200);
    res.send("🌊 Carry on... 🌴");
  }
}

const colorCheck = [
  check(
    "color",
    "You must input a color. If there is not one, type: n/a"
  ).notEmpty(),
];

const supplyCheck = [
  itemNameCheck,
  check("stock", "How many do you currently have?").isInt(),
  inCartCheck,
  colorCheck,
];

const idCheck = [check("id", "Must be 24 characters long.").isLength(24)];

module.exports = {
  errorReturn,
  inCartCheck,
  colorCheck,
  itemNameCheck,
  supplyCheck,
  idCheck
};
