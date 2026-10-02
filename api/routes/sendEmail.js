const { Router } = require("express");
const message = require("../nodemailer");

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const isValid = ({ email, subject, body } = {}) =>
  typeof email === "string" &&
  EMAIL_RE.test(email) &&
  email.length <= 50 &&
  typeof subject === "string" &&
  subject.length >= 2 &&
  subject.length <= 25 &&
  typeof body === "string" &&
  body.length >= 10 &&
  body.length <= 300;

const sendEmail = async (req, res) => {
  const data = req.body;
  if (!isValid(data)) {
    return res.status(400).json({ error: "Invalid data" });
  }
  try {
    await message(data.email, data.subject, data.body);
    return res.status(200).json("Submited succesfully");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Could not send email" });
  }
};

const router = Router();

router.post("/email", sendEmail);

module.exports = router;
