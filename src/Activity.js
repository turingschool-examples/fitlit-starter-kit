class Activity {
  constructor(activityData, user) {
    this.activityData = activityData;
    this.user = user;
  }

  findUser() {
    return this.activityData.filter(person => person.userID === this.user.id);
  }

  returnWeekOfData(week, userData) {
    return [...userData].splice((-7 * week), 7);
  }

  returnWeek(week) {
    var specificUser = this.findUser()
    return [...specificUser].splice(-7 * week, 7).map(day => day.date);
  }

  returnNumStepsDay(date) {
    let specificUser = this.findUser();
    return specificUser.find(day => day.date === date).numSteps;
  }

  returnMilesWalked() {
    let specificUser = this.findUser();
    return Number((this.user.strideLength * specificUser[specificUser.length - 1].numSteps / 5280).toFixed(2))
  }

  returnMinutesActive(date) {
    let specificUser = this.findUser();
    return specificUser.find(day => day.date === date).minutesActive;
  }

  returnFlightsOfStairs(date) {
    let specificUser = this.findUser();
    return specificUser.find(day => day.date === date).flightsOfStairs;
  }

  returnAverageMinutesActiveForWeek(week) {
    let specificUser = this.findUser();
    let weekOfData = this.returnWeekOfData(week, specificUser);
    return Math.floor(weekOfData.reduce((totalMinutes, eachDay) => {
      totalMinutes += eachDay.minutesActive
      return totalMinutes
    }, 0) / 7)
  }

  returnAverageStepsForWeek(week) {
    let specificUser = this.findUser();
    let weekOfData = this.returnWeekOfData(week, specificUser);
    return Math.floor(weekOfData.reduce((totalSteps, eachDay) => {
      totalSteps += eachDay.numSteps
      return totalSteps
    }, 0) / 7)
  }

  returnAverageStairsForWeek(week) {
    let specificUser = this.findUser();
    let weekOfData = this.returnWeekOfData(week, specificUser);
    return Math.floor(weekOfData.reduce((totalStairs, eachDay) => {
      totalStairs += eachDay.flightsOfStairs
      return totalStairs
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
    return [...specificUser].sort((a, b) => b.flightsOfStairs - a.flightsOfStairs)[0].flightsOfStairs
  }

  returnFriendsStepCount() {
    let friends = this.user.friends.map(friend => this.activityData.filter(el => el.userID === friend));
    let friendDataForDates = friends.map(friend => [...friend].splice(-7));
    let totalStepsPerFriend = friendDataForDates.map(friend => friend.reduce((totalSteps, day) => {
      totalSteps += day.numSteps
      return totalSteps
    }, 0));
    var stepObj = this.user.friends.reduce((friendSteps, friend, index) => {
      friendSteps[friend] = totalStepsPerFriend[index];
      return friendSteps
    }, {})
    return [stepObj, this.user.friends[totalStepsPerFriend.indexOf(Math.max(...totalStepsPerFriend))]]
  }

  returnThreeDayStepStreak() {
    let specificUser = this.findUser().reverse();
    let dates = [];
    specificUser.some((user, i, specificUser) => {
      if (specificUser[i].numSteps < specificUser[i + 1].numSteps && specificUser[i + 1].numSteps < specificUser[i + 2].numSteps) {
        dates.push(specificUser[i].date);
        dates.push(specificUser[i + 1].date);
        dates.push(specificUser[i + 2].date);
      }
      return dates.length === 3;
    });

    return dates;
  }

  returnTwoDayStairStreak() {
    var specificUser = this.findUser().reverse();
    let dates = [];
    specificUser.some((user, i, specificUser) => {
      if (specificUser[i].flightsOfStairs > specificUser[i + 1].flightsOfStairs) {
        dates.push(specificUser[i].date);
        dates.push(specificUser[i + 1].date);
      }
      return dates.length === 2;
    });

    return dates;
  }


}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}