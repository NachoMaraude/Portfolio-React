require("dotenv").config();
const mongoose = require("mongoose");

const { DB_USER, DB_PASSWORD, CLUSTER } = process.env;
const ATLAS = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${CLUSTER}.jkja6xd.mongodb.net/?retryWrites=true&w=majority`;

async function dbConnect() {
    try {
        const db = await mongoose.connect(ATLAS);
        console.log("connected to", db.connection.name);
    } catch (error) {
        console.log(error);
    }
}

dbConnect();

module.exports = dbConnect;
