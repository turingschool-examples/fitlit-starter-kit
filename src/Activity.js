class Activity {
  constructor(activityData, user) {
    this.activityData = activityData; 
    this.user = user;
  }

  findUser() {
    return this.activityData.filter(user => user.userID === this.user.id);
  }

  returnWeekOfData(week, userData) {
    return userData.splice((-7 * week), 7);
  }

  returnMilesWalked() {
    let specificUser = this.findUser();
    return Number((this.user.strideLength * specificUser[specificUser.length - 1].numSteps / 5280).toFixed(2))
  }

  returnMinutesActive(date) {
    let specificUser = this.findUser();
    return specificUser.find(day => day.date === date).minutesActive  
  }

  returnAverageMinutesActiveForWeek(week) {
    let specificUser = this.findUser();
    let weekOfData = this.returnWeekOfData(week, specificUser);
    return Math.floor(weekOfData.reduce((totalMinutes, eachDay) => {
      totalMinutes += eachDay.minutesActive
      return totalMinutes 
    }, 0) / 7)
  }

  metStepGoal(date) {
    let specificUser = this.findUser();
    let numSteps = specificUser.find(day => day.date === date).numSteps
    return numSteps >= this.user.dailyStepGoal
  }

  returnAllStepGoalDays() {
    let specificUser = this.findUser();
    let stepGoal = this.user.dailyStepGoal;
    return specificUser.filter(day => day.numSteps >= stepGoal).map(day => day.date);
  }

  returnStepRecord() {
    let specificUser = this.findUser();
    return specificUser.sort((a,b) => b.flightsOfStairs - a.flightsOfStairs)[0].flightsOfStairs
  }
}


if (typeof module !== 'undefined') {
    module.exports = Activity;
  }