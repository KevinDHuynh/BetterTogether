const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// enums
const type = {
    PHYSICAL: 'Physical Health',
    MENTAL: 'Mental Health'
};

const benefit = {
    ONE: 1,
    TWO: 2,
    THREE: 3,
    FOUR: 4,
    FIVE: 5,
    SIX: 6,
    SEVEN: 7,
    EIGHT: 8,
    NINE: 9,
    TEN: 10
};

const difficulty = {
    VERY_EASY: 'Very Easy',
    EASY: 'Easy',
    MEDIUM: 'Medium',
    HARD: 'Hard',
    VERY_HARD: 'Very Hard'
};

const time = {
    FLEX: 'Flexible',
    ACTIVE: 'Active',
    INTERMITTENT: 'Intermittent',
    ONE_TO_FIVE_MIN: '1-5 Minutes',
    FIVE_TO_TEN_MIN: '5-10 Minutes',
    TEN_TO_TWENTY_MIN: '10-20 Minutes',
    TWENTY_TO_THIRTY_MIN: '20-30 Minutes',
    THIRTY_TO_FORTYFIVE_MIN: '30-45 Minutes',
    FORTYFIVE_TO_SIXTY_MIN: '45-60 Minutes',
    ONE_TO_TWO_HR: '1-2 Hours',
    TWO_TO_FIVE_HR: '2-5 Hours',
    FIVE_TO_TEN_HR: '5-10 Hours',
    MORE_THAN_TEN_HR: '>10 Hours'
};

// HabitRecorder schema
const HabitSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    type: {
        type: String, //enum: type
        required: true
    },
    description: {
        type: String,
        default: ""
    },
    predicted_benefit: {
        type: String,
        default: ""
    },
    perceived_benefit: {
        type: Number, //enum: benefit
        default: benefit.ONE
    },
    estimated_difficulty: {
        type: String, //enum: difficulty
        default: difficulty.VERY_EASY
    },
    actual_difficulty: {
        type: String, //enum: difficulty
        default: difficulty.VERY_EASY
    },
    estimated_time: {
        type: String, //enum: time
        default: time.FLEX
    },
    actual_time: {
        type: String, //enum: time
        default: time.FLEX
    },
    user_id: {
        type: String,
        required: true
    }
});

module.exports = {
    HabitRecorder: mongoose.model('habit_recorder', HabitSchema),
    type: type,
    benefit: benefit,
    difficulty: difficulty,
    time: time
};