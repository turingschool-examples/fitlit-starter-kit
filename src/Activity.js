class Activity {
  constructor(userID, date, numSteps, minutesActive, flightsOfStairs) {
    this.userID = userID;
    this.date = date;
    this.numSteps = numSteps;
    this.minutesActive = minutesActive;
    this.flightsOfStairs = flightsOfStairs;
    this.exceededStepGoal = [];
  }
  
  getMilesWalked() {
    // return the miles a user has walked based on their number of steps (use their strideLength to help calculate this)
  }

  getDailyActiveMinutes() {
    // For a user, (identified by their userID) how many minutes were they active for a given day (specified by a date)?
  }

  getWeeklyActiveMinutes() {
    // For a user, how many minutes active did they average for a given week (7 days)?
  }

  compareStepGoal() {
    // find user data with matching date and compare step goal to actual steps
    // see if it exceeds step goal, if so push into exceeded step goal array
  }

  getStairClimbingRecord() {
    // sort through all of the users activity objects and find the stair climbing record that is the highest
  }

  // Make a metric of your own! Document it, calculate it, and display it. (iteration 3 for sleep)

}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}
