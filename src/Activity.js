class Activity {
  constructor(dataPiece) {
    this.id = dataPiece.userID;
    this.date = dataPiece.date;
    this.steps = dataPiece.numSteps;
    this.minActive = dataPiece.minutesActive;
    this.flightsOfStairs = dataPiece.flightsOfStairs;
  }
}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}