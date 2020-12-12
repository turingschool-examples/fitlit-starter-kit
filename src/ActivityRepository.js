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

  getActivityDataByWeek(id, date) {
    const allUserActivity = this.returnActivityData(id);
    const activityDates = allUserActivity.map(activity => activity.date);
    const indexOfMatchingActivityDate = activityDates.indexOf(date);
    return allUserActivity.slice(indexOfMatchingActivityDate - 6, indexOfMatchingActivityDate + 1);
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

  getAllUserAvgSteps(date) {
    const allUserActivityByDate = this.activityInstanceData.filter(activity => activity.date === date);
    const allUserTotalSteps = allUserActivityByDate.reduce((totalSteps, activity) => {
      return activity.numSteps + totalSteps;
    }, 0)
    return Math.round(allUserTotalSteps / allUserActivityByDate.length);
  }

  getAllUserTotalMins(date) {
    const allUserActivityByDate = this.activityInstanceData.filter(activity => activity.date === date);
    const allUserTotalMins = allUserActivityByDate.reduce((totalMins, activity) => {
      return activity.minutesActive + totalMins;
    }, 0)
    return Math.round(allUserTotalMins / allUserActivityByDate.length);
  }

  getAllUserTotalStairs(date) {
    const allUserActivityByDate = this.activityInstanceData.filter(activity => activity.date === date);
    const allUserTotalStairs = allUserActivityByDate.reduce((totalStairs, activity) => {
      return activity.flightsOfStairs + totalStairs;
    }, 0)
    return Math.round(allUserTotalStairs / allUserActivityByDate.length);
  }

}

if (typeof module !== 'undefined') {
  module.exports = ActivityRepository;
}
