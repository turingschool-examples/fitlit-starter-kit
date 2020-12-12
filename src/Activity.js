class Activity {
  constructor(data) {
    this.userID = data.userID;
    this.date = data.date;
    this.numSteps = data.numSteps;
    this.minutesActive = data.minutesActive;
    this.flightsofStairs = data.flightsOfStairs
  }

  verifyIfStepGoal(user) {
    return user.dailyStepGoal <= this.numSteps
  }

  getStepMiles(user) {
    const distanceInFeet = user.strideLength * this.numSteps
    5280 / distanceInFeet
  }


}



module.exports =  Activity;
