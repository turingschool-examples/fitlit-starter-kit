class ActivityRepository {
  constructor(activityInstanceData) {
    this.activityInstanceData = activityInstanceData;
  }

  returnActivityData(id) {
    return this.activityInstanceData.filter(activity => activity.userID === id);
  }

  filterByIdAndDate(user, date) {
    const allUserActivity = this.returnActivityData(user.id);
    return allUserActivity.find(activity => activity.date === date);
  }

  returnMilesWalked(user, date) {
    const userActivityDate = this.filterByIdAndDate(user, date);
    return Number(((user.strideLength * userActivityDate.numSteps) / 5280).toFixed(1));
  }

  returnStepsTaken(user, date) {
    const userActivityDate = this.filterByIdAndDate(user, date);
    return userActivityDate.numSteps;
  }

  returnMinutesActive(user, date) {
    const userActivityDate = this.filterByIdAndDate(user, date);
    return userActivityDate.minutesActive;
  }

  returnStairs(user, date) {
    const userActivityDate = this.filterByIdAndDate(user, date);
    return userActivityDate.flightsOfStairs;
  }

  calculateWeeklyAverageMinutesActive(id, date) {
    const allUserActivity = this.returnActivityData(id);
    const activityDates = allUserActivity.map(activity => activity.date);
    const indexOfMatchingActivityDate = activityDates.indexOf(date);
    const weekOfUserActivity =  allUserActivity.slice(indexOfMatchingActivityDate - 6, indexOfMatchingActivityDate + 1);
    const totalUserActiveMinutes = weekOfUserActivity.reduce((totalMinutes, activity) => totalMinutes + activity.minutesActive, 0)
    return Math.round((totalUserActiveMinutes / 7));
  }

  determineStepGoalAchieved(user, date) {
    const allUserActivity = this.returnActivityData(user.id);
    const userActivityDate = allUserActivity.find(activity => activity.date === date);
    return (user.dailyStepGoal <= userActivityDate.numSteps);
  }

  findDaysExceededStepGoal(user) {
    const daysExceededStepGoal = [];
    const allUserActivity = this.returnActivityData(user.id);
    allUserActivity.forEach(activity => {
      if (activity.numSteps >= user.dailyStepGoal) {
        daysExceededStepGoal.push(activity.date);
      }
    })
    return daysExceededStepGoal;
  }

  findFlightsOfStairsRecord(id) {
    const allUserActivity = this.returnActivityData(id);
    const allFlightsOfStairs = allUserActivity.map(activity => activity.flightsOfStairs);
    const max = Math.max(...allFlightsOfStairs);
    return max;
  }

  getAllUsersActivityAvgOnDay(date) {
    const allUserActivityByDate = this.activityInstanceData.filter(activity => activity.date === date);
    const allUserTotalSteps = allUserActivityByDate.reduce((totalSteps, activity) => {
      return activity.numSteps + totalSteps;
    }, 0)
    const allUserAvgSteps = allUserTotalSteps / allUserActivityByDate.length;
    const allUserTotalMins = allUserActivityByDate.reduce((totalMins, activity) => {
      return activity.minutesActive + totalMins;
    }, 0)
    const allUserAvgMinsActive = allUserTotalMins / allUserActivityByDate.length;
    const allUserTotalStairs = allUserActivityByDate.reduce((totalStairs, activity) => {
      return activity.flightsOfStairs + totalStairs;
    }, 0)
    const allUserAvgStairs = allUserTotalStairs / allUserActivityByDate.length;
    const allAverages = {
      numSteps: Math.round(allUserAvgSteps),
      minutesActive: Math.round(allUserAvgMinsActive),
      flightsOfStairs: Math.round(allUserAvgStairs)
    }
    return allAverages;
  }

}

if (typeof module !== 'undefined') {
  module.exports = ActivityRepository;
}
