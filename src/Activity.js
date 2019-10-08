class Activity { // instance that's updated each time a user walks or climbs in a given day (will reset each day)
  constructor(user) {
    this.userId = user.id;
    this.date = date;
    this.steps = 0;
    this.minutesActiveToday = 0;
    this.flightsOfStairs = 0;
    this.milesWalked = 0;
    this.minutesActiveRecord = [];
    this.stepsRecord = [];
    this.stairsRecord = [];
    this.reachedStepGoal = false;
    this.accomplishedDays = []; //will hold dates where they exceeded step goal
    this.topClimbingDay = topClimbingDay;
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

module.exports = Activity;
