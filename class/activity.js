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

module.exports = Activity;


// var theSteps = userDataClass.strideLength * activityData[0].numSteps / 5280
// undefined
// Math.round(theSteps)
// 2


// let findUserData = this.hydrationData.filter(element => element.userID === id);
