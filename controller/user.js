const User = require("./../model/user");

const register = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { register };
