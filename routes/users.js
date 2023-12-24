var express = require("express");
var router = express.Router();
const User = require("../model/user");

/* GET users listing. */
router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

router.post("/create", async (req, res) => {
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  });

  await user.save();

  res.json({
    message: "user created.",
  });
});

module.exports = router;
