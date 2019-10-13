class Activity {
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
    this.accomplishedDays = [];
    this.topClimbingDay = '';
  }
  calculateMiles(userRepository) {
    let walkingUser = userRepository.users.find(user => {
      return user.id === this.userId;
    });
    return Math.round(this.steps * walkingUser.strideLength / 5280).toFixed(1);
  }
  findAccomplishedDays() {

  }
  updateTopClimbingDay() {

  }
}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}
