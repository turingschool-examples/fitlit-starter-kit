// eslint-disable-next-line no-unused-vars
class Activity {
  constructor(data) {

    this.userID = data.userID;
    this.date = data.date;
    this.numSteps = data.numSteps;
    this.minutesActive = data.minutesActive;
    this.stairsClimbed = data.flightsOfStairs
  }

  verifyIfStepGoal(user) {
    return user.dailyStepGoal <= this.numSteps
  }

  getStepMiles(user) {
    const distanceInFeet = user.strideLength * this.numSteps
    return Math.round((distanceInFeet / 5280) * 100) / 100
  }

}

// module.exports =  Activity;
