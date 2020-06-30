const express = require('express');
const authenticate = require('../middleware/authenticate');
const router = express.Router();

// HabitRecorder model
const HabitRecorder = require('../../models/HabitRecorder');

// GET: /api/habit_recorders --> PUBLIC
// Access all DB entries
router.get('/', (req, res) => {
    HabitRecorder.find()
        .then(hr => res.json(hr));
});

// GET: /api/habit_recorders/:id --> PUBLIC
// Access specified DB entry
router.get('/:id', (req, res) => {
    HabitRecorder.findById(req.params.id)
        .then(hr => res.json(hr));
});

// POST: /api/habit_recorders --> PRIVATE
// Create a new DB entry
router.post('/', authenticate, (req, res) => {
    const newHabitRecorder = new HabitRecorder({
        title: req.body.title,
        type: req.body.type,
        description: req.body.description,
        predicted_longterm_benefit: req.body.predicted_longterm_benefit,
        estimated_difficulty: req.body.estimated_difficulty,
        estimated_time: req.body.estimated_time,
        actual_difficulty: req.body.actual_difficulty,
        actual_time: req.body.actual_time,
        perceived_benefit: req.body.perceived_benefit
    });

    newHabitRecorder.save().then(hr => res.send(hr));
});

// DELETE: /api/habit_recorders/:id --> PRIVATE
// Delete an existing DB entry
router.delete('/:id', authenticate, (req, res) => {
    HabitRecorder.findById(req.params.id)
        .then(hr => hr.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;