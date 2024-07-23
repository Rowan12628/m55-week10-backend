const { Router } = require("express");
const userRouter = Router();

userRouter.get("/test", async (req, res) => {
  res.status(200).json({ message: "test okey dokey!" });
});

module.exports = userRouter;
