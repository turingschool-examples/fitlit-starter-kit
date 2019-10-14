class Activity {
  constructor(userRepo) {
    this.userID = userRepo.currentUserId;
    this.date = userRepo.day;
    this.numSteps = null;
    this.minutesActive = null;
    this.flightsOfStairs = null;
    this.goalComplete = false;
  }

}

// Activity: Contains information about activity
//   Description:
//   Properties:
//     - userID
//     - date
//     - numSteps
//     - minutesActive
//     - flightsOfStairs
//   Methods:
//     - getDayMiles / takes date and id, return product of stride length and number of steps
//     - getDayActiveMins / takes date and id, return active minutes
//     - getWeekActiveMinsAverage / takes id and date, return average of last 7 days for acrtive minutes
//     - checkStepGoal / takes id and date, return true or false based on steps in the day vs step goal
//     - findGoalCompletedDays / takes id, return array of all days with goal completed
//     - findStairRecord / takes id, get array of all stair climb data, return day with the most flights
