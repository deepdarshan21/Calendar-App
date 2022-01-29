const express = require("express");
const cors = require("cors");
const colors = require("colors");
const connectDB = require("./config/db");

require("dotenv").config();

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("*", (req, res) => {
    res.send("Server is running :)");
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running at: http://localhost:${PORT}`.yellow.bold);
});
