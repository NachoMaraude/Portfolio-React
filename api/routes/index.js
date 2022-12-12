const { Router } = require("express");
const sendEmail = require("./sendEmail");

const router = Router();

router.use("/", sendEmail);

module.exports = router;
