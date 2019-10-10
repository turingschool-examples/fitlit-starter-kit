class Activity { // instance that's updated each time a user walks or climbs in a given day (will reset each day)
  constructor(activity) {
    this.userId = activity.userID;
    this.date = activity.date;
    this.steps = activity.numSteps;
    this.minutesActive = activity.minutesActive;
    this.flightsOfStairs = activity.flightsOfStairs;
    this.milesWalked = 0;
    this.minutesActiveRecord = [];
    this.stepsRecord = [];
    this.stairsRecord = [];
    this.reachedStepGoal = false;
    this.accomplishedDays = []; //will hold dates where they exceeded step goal
    this.topClimbingDay = '';
  }
  walk() {

  }
  climb() {

  }
  calculateMiles() {

  }
  findAccomplishedDays() {

  }
  updateTopClimbingDay() {

  }
}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}
