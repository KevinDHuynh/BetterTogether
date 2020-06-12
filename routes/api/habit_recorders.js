const express = require('express');
const router = express.Router();

// HabitRecorder model
const HabitRecorder = require('../../models/HabitRecorder');

// GET: /api/habit_recorders
router.get('/', (req, res) => {
    // Access all DB entries
    HabitRecorder.find()
        .then(hr => res.json(hr));
});

// GET: /api/habit_recorders/:id
router.get('/:id', (req, res) => {
    // Access specified DB entry
    HabitRecorder.findById(req.params.id)
        .then(hr => res.json(hr));
});

// POST: /api/habit_recorders
router.post('/', (req, res) => {
    // Create a new DB entry
    const newHabitRecorder = new HabitRecorder({
        title: req.params.title
    });

    newHabitRecorder.save().then(hr => res.send(hr));
});

// DELETE: /api/habit_recorders/:id
router.delete('/:id', (req, res) => {
    // Delete an existing DB entry
    HabitRecorder.findById(req.params.id)
        .then(hr => hr.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;