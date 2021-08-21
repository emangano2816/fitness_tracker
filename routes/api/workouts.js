const router = require("express").Router();
const { Mongoose } = require("mongoose");
const db = require('../../models');


//GET api/workouts - calculate totalDuration and then return last workout (sort descending, limit 1)
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
    //if successful, then return data
    .then(dbWorkout => {
            res.status(200).json(dbWorkout);
    })
    //otherwise, return error
    .catch(err => {
            res.status(400).json(err);
    })
});

//GET api/workouts/range - calculate totalDuration and then return last 7 workouts (sort descending, limit 7)
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
        //if successful, then return data
        .then (dbWorkout => {
                res.status(200).json(dbWorkout);
        })
        //otherwise, return error
        .catch(err => {
            res.status(400).json(err);
        })
});

//PUT api/workouts - update current workout with additional exercise information
router.put('/:id', ({ body, params }, res) => {
    db.Workout
        .findByIdAndUpdate(params.id, {$push: {exercises: body}}, {new: true, runValidators: true})
        //if successful, then return data
        .then (dbWorkout => {
            res.status(200).json(dbWorkout);
        })
        //otherwise, return error
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
});

//POST api/workouts - create new workout (i.e., add new workout to db)
router.post('/', ({ body }, res) => {
    db.Workout
        .create(body)
        //if successful, return data
        .then(dbWorkout => {
            console.log(dbWorkout);
            res.status(200).json(dbWorkout);
        })
        //otherwsie, return error
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
})

module.exports = router;