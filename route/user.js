const router = require("express").Router();
const user = require("./../controller/user");
router.route("/").get(user.getAll);
router.route("/register").post(user.register);

module.exports = router;
