const router = require("express").Router();
const { Mongoose } = require("mongoose");
const db = require('../../models');


//GET api/workouts - return last workout with totalDuration computed
router.get('/', (req, res) => {
    db
    .Workout
    .aggregate(
                [
                    {
                        $addFields: { totalDuration: {$sum: "$exercises.duration"}}
                    }
                ])
    .sort({ day: -1})
    .limit(1)
    .then(dbWorkout => {
            res.json(dbWorkout);
    })
    .catch(err => {
            res.json(err);
    })
});

//GET api/workouts/range - return last 7 workouts with totalDuration computed
router.get('/range', (req, res) => {
    db.Workout
        .aggregate(
                    [
                        {
                            $addFields: { totalDuration: {$sum: "$exercises.duration"}}
                        }
                    ]
        )
        .sort({ day: -1 })
        .limit(7)
        .then (dbWorkout => {
                res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        })
});

//PUT api/workouts - update current workout with additional exercise information
router.put('/:id', ({ body, params }, res) => {
    db.Workout
        .findByIdAndUpdate(params.id, {$push: {exercises: body}}, {new: true, runValidators: true})
        .then (dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        })
});

//POST api/workouts
router.post('/', ({ body }, res) => {
    db.Workout
        .create(body)
        .then(dbWorkout => {
            console.log(dbWorkout);
            res.json(dbWorkout);
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        })
})

module.exports = router;