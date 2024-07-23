const User = require("./model");

const signup = async (req, res) => {
  console.log("req.body: ", req.body);
  try {
    const user = await User.create(req.body);

    res.status(201).json({ message: "success", username: user.username });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

const login = async (req, res) => {
  try {
    res.status(201).json({ message: "success" });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.findAll();
    res.status(201).json({ message: "success", allUsers: allUsers });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

module.exports = {
  signup: signup,
  login: login,
  getAllUsers: getAllUsers,
};
