const { Router } = require("express");
const userRouter = Router();

const { signup } = require("./controllers");

userRouter.get("/test", async (req, res) => {
  res.status(200).json({ message: "test okey dokey!" });
});

userRouter.post("/signup", signup);

module.exports = userRouter;
