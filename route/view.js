const router = require("express").Router();
const viewController = require("./../controller/viewController");

router.route("/").get(viewController.home);
router.route("/register").get(viewController.register);
module.exports = router;
