const mongoose = require("mongoose");

const connectDB = async () => {
    mongoose
        .connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(
            () => {
                console.log("Connected with Database".cyan.underline.bold);
            },
            (err) => {
                console.log(`Can't connect to database: ${err}`.red);
                process.exit();
            }
        );
};

module.exports = connectDB;
