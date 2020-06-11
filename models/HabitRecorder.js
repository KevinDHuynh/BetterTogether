const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// HabitRecorder schema
const HabitSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    type: {
        type: Enumerator,
        required: true
    },
    description: {
        type: String
    },
    predicted_longterm_benefit: {
        type: String
    },
    estimated_difficulty: {
        type: Enumerator
    },
    estimated_time: {
        type: TimeRanges
    },
    actual_difficulty: {
        type: Enumerator
    },
    actual_time: {
        type: TimeRanges
    },
    perceived_benefit: {
        type: Enumerator
    }
});

module.exports = HabitRecorder = mongoose.model('habit_recorder', HabitSchema);