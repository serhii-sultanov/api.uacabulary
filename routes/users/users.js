const { Router } = require("express");

const User = require("../../models/user");

const router = Router();

router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

router.post("/", async (req, res) => {
  console.log("req.body", req.body);

  const newUser = new User({
    name: req.body.name,
    id: req.body.id,
  });

  const { _id } = await newUser.save();
  res.json({ id: _id });
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;

    await User.deleteOne({ _id: id });
    res.json({ id, message: "success" });
  } catch {
    res.status(404).json({
      message: "Don't have user with passed ID",
    });
  }
});

module.exports = router;
