class Activity {
  constructor(activityData) {
    this.userID = activityData.userId,
    this.date = activityData.date,
    this.numSteps = activityData.numSteps,
    this.minutesActive = activityData.minutesActive,
    this.flightsOfStairs = activityData.flightsOfStairs,
  }

  calculateMilesWalked() {

  }

  returnMinutesActive() {

  }

  calcWeeksActiveAverage() {

  }

  calculateElevationClimbed() {

  }
}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}
