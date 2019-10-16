class Activity {
  constructor(activityData) {
    this.id = activityData.userID;
    this.date = activityData.date;
    this.numSteps = activityData.numSteps;
    this.minutesActive = activityData.minutesActive;
    this.flightsOfStairs = activityData.flightsOfStairs;
  }
  milesWalked() {
  var miles =  Math.round(this.numSteps * userDataClass.strideLength / 5280);
  return miles
  }
}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}
