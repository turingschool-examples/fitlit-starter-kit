class Activity {
  constructor(activityData) {
    this.activityData = activityData;
  }

  getUserData(id) {
    return this.activityData.filter(obj => obj.userID === id);
  }

  getDay(id, date) {
    return this.getUserData(id).find(obj => obj.date === date);
  }

  getWeek(id, date) {
    let endDate = this.getUserData(id).findIndex(obj => obj.date === date);
    return endDate - 6 >= 0 ?
      this.getUserData(id).slice(endDate - 6, endDate + 1) :
      this.getUserData(id).slice(0, endDate + 1);
  }

  getStepsByWeek(id, date) {
    return this.getWeek(id, date).reduce((acc, obj) => acc + obj.numSteps, 0);
  }

  getMilesByDay(id, date, userRepo) {
    let feetWalked = this.getDay(id, date).numSteps * userRepo.getUserData(id).strideLength;
    return +(feetWalked / 5280).toFixed(1);
  }

  getMilesByWeek(id, date, userRepo) {
    return this.getWeek(id, date).map(obj =>
      this.getMilesByDay(id, obj.date, userRepo));
  }

  getMinutesByDay(id, date) {
    return this.getDay(id, date).minutesActive;
  }

  getAverageMinutesByWeek(id, date) {
    let weekData = this.getWeek(id, date);
    return Math.round(weekData.reduce((acc, day) =>
      acc + day.minutesActive, 0) / weekData.length);
  }

  checkStepGoal(id, date, userRepo) {
    return this.getDay(id, date).numSteps > userRepo.getUserData(id).dailyStepGoal;
  }

  getGoalDays(id, userRepo) {
    return this.getUserData(id).filter(obj =>
      obj.numSteps > userRepo.getUserData(id).dailyStepGoal);
  }

  getStairRecord(id) {
    return this.getUserData(id).sort((a, b) =>
      a.flightsOfStairs - b.flightsOfStairs).pop().flightsOfStairs;
  }

  getAverageStairsByDay(date) {
    let userIDs = [...new Set(this.activityData.map(object => object.userID))];
    let totalStairs = userIDs.reduce((acc, ID) =>
      acc + this.getDay(ID, date).flightsOfStairs, 0);
    return Math.round(totalStairs / userIDs.length);
  }

  getAverageStepsByDay(date) {
    let userIDs = [...new Set(this.activityData.map(object => object.userID))];
    let totalSteps = userIDs.reduce((acc, ID) =>
      acc + this.getDay(ID, date).numSteps, 0);
    return Math.round(totalSteps / userIDs.length);
  }

  getAverageMinutesByDay(date) {
    let userIDs = [...new Set(this.activityData.map(object => object.userID))];
    let totalMinutes = userIDs.reduce((acc, ID) =>
      acc + this.getDay(ID, date).minutesActive, 0);
    return Math.round(totalMinutes / userIDs.length);
  }

  getStepsTrend(id) {
    let groupedData = this.getUserData(id).map((obj, index, array) =>
      array.slice(index - 2, index + 1)).slice(2);
    let sortedData = JSON.parse(JSON.stringify(groupedData)).map(group =>
      group.sort((a, b) => a.numSteps - b.numSteps));
    let streaks = groupedData.filter((group, index1) =>
      group.every((obj, index2) =>
        obj.date === sortedData[index1][index2].date));
    return streaks.map(streak => streak[2]);
  }
}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}
