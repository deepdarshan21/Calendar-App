const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { type: String, trim: true, required: [true, "Please enter your name"] },
    email: { type: String, trim: true, required: [true, "Please enter your email"] },
    password: { type: String, required: true },
    // date: { type: Date, default: Date.now },
    allMeetings: [
        {
            date: { type: Date },
            oneDayMeeting: [
                {
                    name: { type: String, required: true },
                    imp: { type: String, required: true },
                    link: { type: String, required: true },
                    start: { type: String, required: true },
                    end: { type: String, required: true },
                },
            ],
        },
    ],
});

const CalendarDB = new mongoose.model("CalanderDB", userSchema);

module.exports = CalendarDB;
