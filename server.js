require("dotenv").config()
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./src/models")
const routes = require("./src/routes")

const app = express();

app.use(cors());

app.use(express.json());


app.use(express.urlencoded({ extended: true }));

app.use("/", routes)

const PORT = process.env.PORT || 8080;
db.sequelize.sync().then(()=>{
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}.`);
      })
});