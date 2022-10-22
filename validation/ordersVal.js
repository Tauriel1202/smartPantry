const { check, validationResult } = require("express-validator");
const { idCheck, itemNameCheck } = require('../validation/foodVal');
const { colorCheck } = require("./supplyVal");

function errorReturn(req, res, test) {
  const errors = validationResult(test);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  } else {
    res.status(200);
    res.send("🏹 Carry on... 🎯");
  }
}

const dateOrderedCheck = [
  check('dateOrdered', 'When did you order? mm/dd/yy format').isLength({min: 2})
]

const etaCheck = [
  check('eta', 'When is it expected to arrive? mm/dd/yy format').isLength({min: 2})
]

const orderChecker = [
  itemNameCheck,
  check('quantityOrdered', 'How many did you order?').notEmpty(),
  check('quantityOrdered', 'Must be an integer.').isInt(),
  colorCheck,
  dateOrderedCheck,
  etaCheck,
  check('price', 'How much was it?').notEmpty(),
  check('price', 'Must be an integer.').isInt(),
  check('gift', 'Is it a gift? true/false').notEmpty(),
  check('gift', 'Must be a boolean.').isBoolean()
]

module.exports = {
  errorReturn,
  dateOrderedCheck,
  etaCheck,
  orderChecker,
  idCheck
}