const { Router } = require("express");
const userRouter = Router();

const { signup, login, getAllUsers } = require("./controllers");
const { hashPass, comparePass } = require("../middleware/auth");

userRouter.get("/test", async (req, res) => {
  res.status(200).json({ message: "test okey dokey!" });
});

userRouter.post("/signup", hashPass, signup);
//removed hashPass for login test- put back

userRouter.post("/login", comparePass, login);

userRouter.get("/getAllUsers", getAllUsers);

module.exports = userRouter;
