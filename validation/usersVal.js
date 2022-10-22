const { check, validationResult } = require("express-validator");
const { idCheck } = require("../validation/foodVal");

function errorReturn(req, res, test) {
  const errors = validationResult(test);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  } else {
    res.status(200);
    res.send("🏹 Carry on... 🎯");
  }
}

const usernameCheck = [
  check("username", "This is a required field.").isLength({min: 2})
];

const userCheck = [
  usernameCheck,
  check("email", "Email is required.").notEmpty(),
];

module.exports = {
  errorReturn,
  usernameCheck,
  userCheck,
  idCheck,
};
