# Fitness Tracker

![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)

## Link(s)

* [GitHub Repository](https://github.com/emangano2816/fitness_tracker)
* [Application](https://whispering-hamlet-69152.herokuapp.com/)

## User Story

```md
AS a user
I WANT to be able to view create and track daily workouts 
SO THAT I am more likely to meet my fitness goals
```

## Summary of Application Functionality
When a user visits the Fitness Tracker application a summary of the last workout (if one exists) is displayed to the user.  In the top-left corner the user is able to navigate to the 'Dashboard' where graphs summarizing the last 7 workouts are displayed.  Hitting 'Fitness Tracker' returns the user to the homepage where the user is able to (1) add to an exsiting workout (i.e., hit the 'Continue Workout' button) or (2) create a new workout (i.e., hit the 'New Workout' button).

Upon hitting the 'Continue Workout' button the user is redirected to the 'Add Your Exercise' page.  Here the user is able to select an exercise type and then provide the details of the selected exercise type.  Once all information is provided the user is able to hit 'Complete' or 'Add Exercise'.  
   * Hitting 'Complete' adds the exercise to the current workout and returns the user to the homepage where the dipslayed summary information is updated with the added exercise.
   * Hitting 'Add Exercise' allows the user to add additional exercises to the workout. The user is able to add as many exercises as desired for a given day. When the workout is complete, the user should hit 'Complete' and will be returned to the homepage where the summary information displayed is updated to reflect the new workout/exercises added by the user.

Upon hitting 'New Workout' the user is redirected to the 'Add Your Exercise' page and is able to create a new workout.  Just as above, the user is able to add as many exercises to the workout as desired.  Once the workout is complete the user is redirected to the homepage where the summary information reflects the added workout/exercises.
    
## Tecnhologies Used
1. NodeJS (packages: express, mongoose, morgan)
2. MongoDB, MongoDB Atlas
3. Robo 3T
4. Insomnia
5. Heroku

## Installation

No installation required.

## License

This application is covered under the MIT license.
