const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// enums
const type = {
    PHYSICAL: 'Physical',
    CREATIVE: 'Creative',
    SLEEP: 'Sleep',
    PLEASURE: 'Pleasure'
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
    LESS_THAN_A_WEEK: '<1 Week',
    ONE_WEEK: '1 Week',
    TWO_WEEKS: '2 Weeks',
    THREE_WEEKS: '3 Weeks',
    ONE_MONTH: '1 Month',
    EIGHT_WEEKS: '2 Months',
    TWELVE_WEEKS: '3 Months',
    TWENTYONE_WEEKS: '6 Months',
    ONE_YEAR: '1 Year',
    TWO_YEARS: '2 Years',
    FIVE_YEARS: '5 Years',
    TEN_YEARS: '10 Years',
    GREATER_THAN_TEN_YEARS: '>10 Years'
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
    predicted_longterm_benefit: {
        type: Number, //enum: benefit
        default: benefit.ONE
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
        default: time.LESS_THAN_A_WEEK
    },
    actual_time: {
        type: String, //enum: time
        default: time.LESS_THAN_A_WEEK
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