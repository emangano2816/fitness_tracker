const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DaySchema = new Schema({
    day: {
        type: Date,
        require: true
    },
    exercises: [
        {
            type: Schema.Types.ObjectId,
            ref: "Exercise"
        }
    ]
});

const Day = mongoose.model("Day", DaySchema);


module.exports = Day;