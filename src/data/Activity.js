class Activity {
  constructor(userInfo) {
    this.userID = userInfo.userID
    this.date = userInfo.date
    this.numSteps = userInfo.numSteps
    this.minutesActive = userInfo.minutesActive
    this.flightsOfStairs = userInfo.flightsOfStairs
  }
}

export default Activity
