class Activity {
  constructor(dataPiece) {
    this.id = dataPiece.userID;
    this.date = dataPiece.date;
    this.steps = dataPiece.numSteps;
    this.minutes = dataPiece.minutesActive;
    this.flightsOfStairs = dataPiece.flightsOfStairs;
  }

  returnMinutes() {
    return this.minutes;
  }

  checkStepGoal(goal) {
    return this.steps >= goal ? true : false;
  }
}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}