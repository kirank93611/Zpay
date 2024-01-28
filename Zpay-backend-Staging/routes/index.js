const login = require("./login");
const register = require("./registration");

const router = require("express").Router();

router.use(login);
router.use(register);

module.exports = router;
