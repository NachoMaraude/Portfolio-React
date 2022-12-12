require("dotenv").config();
const app = require("./app");

require("./db");

app.listen(app.get("port"), () => {
    console.log(`listen on port ${app.get("port")}`);
});
