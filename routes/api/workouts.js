const router = require("express").Router();
const db = require('../../models');


//GET api/workouts - return workouts
router.get('/', async (req, res) => {
    try {
        await db.Workout.find({}).sort({ day: -1})
            .populate('exercises')
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
    } catch (err) {
        res.status(400).json(err);
   };
});

module.exports = router;