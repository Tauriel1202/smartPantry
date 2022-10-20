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



module.exports = {
  errorReturn
}