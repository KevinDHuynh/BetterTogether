const express = require('express');
const authenticate = require('../middleware/authenticate');
const router = express.Router();

// HabitRecorder model
const HabitRecorder = require('../../models/HabitRecorder').HabitRecorder;

// GET: /api/habit_recorders --> PUBLIC
// Access all DB entries created by current user
router.get('/', authenticate, (req, res) => {
    HabitRecorder.find()
        .then(hr => {
            // Filter for habits created by current user
            const habits = []
            for(i = 0; i < hr.length; i++) {
                if(hr[i].user_id === req.user.id ) {
                    habits.push(hr[i])
                }
            }
            res.json(habits);
        });
});

// GET: /api/habit_recorders/:id --> PUBLIC
// Access specified DB entry by ID
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
        perceived_benefit: req.body.perceived_benefit,
        user_id: req.user.id
    });

    newHabitRecorder.save().then(hr => res.json(hr));
});

// DELETE: /api/habit_recorders/:id --> PRIVATE
// Delete an existing DB entry, as long as DB entry owned by current user
router.delete('/:id', authenticate, (req, res) => {
    HabitRecorder.findById(req.params.id)
        .then(hr => {
            // Verify user owns habit
            if(hr.user_id === req.user.id) {
                hr.remove().then(() => res.json({ success: true }));
            }
            else {
                res.status(404).json({ error_msg: "User unable to delete this habit" });
            }
        })
        .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;