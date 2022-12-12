const { Router } = require("express");
const message = require("../nodemailer");

const sendEmail = async (req, res) => {
    const data = req.body;
    try {
        await message(data.email, data.subject, data.body);
        return res.status(200).json("Submited succesfully");
    } catch (error) {
        res.status(500).json(error);
    }
};

const router = Router();

router.post("/email", sendEmail);

module.exports = router;
