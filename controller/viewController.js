const home = async (req, res, next) => {
  res.render("home");
};
const register = async (req, res, next) => {
  res.render("register");
};
module.exports = { home, register };
