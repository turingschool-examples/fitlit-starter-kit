class Activity {
  constructor(userID, date, numSteps, minutesActive, flightsOfStairs) {
    this.userID: userID;
    this.date: date;
    this.numSteps: numSteps;
    this.minutesActive: minutesActive;
    this.flightsOfStairs: flightsOfStairs;
  }
}


if (typeof module !== 'undefined') {
  module.exports = Activity;
}
