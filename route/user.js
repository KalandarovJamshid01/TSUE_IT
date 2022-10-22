const router = require("express").Router();
const user = require("./../controller/user");
router.route("/register").post(user.register);
module.exports = router;
