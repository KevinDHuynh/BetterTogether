const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// HabitRecorder schema
const HabitSchema = new Schema({
    title: {
        type: String, //enum
        default: ""
    },
    type: {
        type: String, //enum
        default: ""
    },
    description: {
        type: String,
        default: ""
    },
    predicted_longterm_benefit: {
        type: String,
        default: ""
    },
    estimated_difficulty: {
        type: String, //enum
        default: ""
    },
    estimated_time: {
        type: Number, // time range
        default: 0
    },
    actual_difficulty: {
        type: String, //enum
        default: ""
    },
    actual_time: {
        type: Number, // time range
        default: 0
    },
    perceived_benefit: {
        type: String, //enum
        default: ""
    }
});

module.exports = HabitRecorder = mongoose.model('habit_recorder', HabitSchema);