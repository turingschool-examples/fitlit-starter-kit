class ActivityRepository{
  constructor(activityTestData) {
    this.activityTestData = activityTestData;
  }


  getUsers(date) {
    return this.activityTestData.filter(day => day.date === date)
  }

  findStairAverage(date) {
    var totalStairs = this.getUsers(date).reduce((acc, user) => {
      acc += user.flightsOfStairs;
      return acc
    }, 0)
    return totalStairs / this.getUsers(date).length;
  }

  findActiveMinutesAverage(date) {
    var totalMinutes = this.getUsers(date).reduce((acc, user) => {
      acc += user.minutesActive;
      return acc
    }, 0)
    return Math.round(totalMinutes / this.getUsers(date).length);
  }

  findStepAverage(date) {
    var totalSteps = this.getUsers(date).reduce((acc, user) => {
      acc += user.numSteps;
      return acc
    }, 0)
    return Math.round(totalSteps / this.getUsers(date).length);
  }
  


} //<-----end of class 


if (typeof module !== 'undefined') {
  module.exports = ActivityRepository;
}