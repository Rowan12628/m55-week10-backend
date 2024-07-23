const { Router } = require("express");
const userRouter = Router();

const { signup, getAllUsers } = require("./controllers");
const { hashPass } = require("../middleware/auth");

userRouter.get("/test", async (req, res) => {
  res.status(200).json({ message: "test okey dokey!" });
});

userRouter.post("/signup", hashPass, signup);

userRouter.get("/getAllUsers", getAllUsers);

module.exports = userRouter;
