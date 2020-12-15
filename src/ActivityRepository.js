class ActivityRepo {
  constructor(allActivity) {
    this.allActivity = allActivity;
  }

  getActivitiesById(id) {
    return this.allActivity.filter(activity => activity.userID === id);
  }

  getActivitiesByDate(date) {
    return this.allActivity.filter(activity => activity.date === date);
  }

  filterByIdAndDate(user, date) {
    const allUserActivity = this.getActivitiesById(user.id);
    return allUserActivity.find(activity => activity.date === date);
  }

  getMilesWalked(user, date) {
    const activityByDate = this.filterByIdAndDate(user, date);
    const distance = user.strideLength * activityByDate.numSteps;
    return Number((distance / 5280).toFixed(1));
  }

  getStepsTaken(user, date) {
    const activityByDate = this.filterByIdAndDate(user, date);
    return activityByDate.numSteps.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  getMinsActive(user, date) {
    const activityByDate = this.filterByIdAndDate(user, date);
    return activityByDate.minutesActive;
  }

  getStairs(user, date) {
    const activityByDate = this.filterByIdAndDate(user, date);
    return activityByDate.flightsOfStairs;
  }

  getActivityDataByWeek(id, date) {
    const userActivity = this.getActivitiesById(id);
    const activityDates = userActivity.map(activity => activity.date);
    const indexOfDate = activityDates.indexOf(date);
    return userActivity.slice(indexOfDate - 6, indexOfDate + 1);
  }

  getAvgMinsActiveByWeek(id, date) {
    const week = this.getActivityDataByWeek(id, date);
    const totalMins = week.reduce((total, activity) => {
      return total + activity.minutesActive;
    }, 0)
    return Math.round((totalMins / 7));
  }

  getStepGoalAchieved(user, date) {
    const userActivities = this.getActivitiesById(user.id);
    const activitiesByDate = userActivities.find(activity => {
      return activity.date === date;
    });
    return (user.dailyStepGoal <= activitiesByDate.numSteps);
  }

  findDatesExceededStepGoal(user) {
    const dates = [];
    const userActivities = this.getActivitiesById(user.id);
    userActivities.forEach(activity => {
      if (activity.numSteps >= user.dailyStepGoal) {
        dates.push(activity.date);
      }
    });
    return dates;
  }

  findFlightsOfStairsRecord(id) {
    const userActivity = this.getActivitiesById(id);
    const stairs = userActivity.map(activity => activity.flightsOfStairs);
    return Math.max(...stairs);
  }

  getStepsTakenByWeek(id, date) {
    const userActivity = this.getActivitiesById(id);
    const activityDates = userActivity.map(activity => activity.date);
    const indexOfDate = activityDates.indexOf(date);
    const activityByDate = userActivity.slice(indexOfDate - 6, indexOfDate + 1);
    return activityByDate.reduce((obj, activity) => {
      obj[activity.date] = activity.numSteps;
      return obj;
    }, {})
  }

  getAllUsersAvgStepsByDate(date) {
    const activitiesOnDate = this.getActivitiesByDate(date);
    const totalSteps = activitiesOnDate.reduce((total, activity) => {
      return total + activity.numSteps;
    }, 0)
    return Math.round(totalSteps / activitiesOnDate.length);
  }

  getAllUsersAvgMinsByDate(date) {
    const activitiesOnDate = this.getActivitiesByDate(date);
    const totalMins = activitiesOnDate.reduce((total, activity) => {
      return total + activity.minutesActive;
    }, 0)
    return Math.round(totalMins / activitiesOnDate.length);
  }

  getAllUsersAvgStairsByDate(date) {
    const activitiesOnDate = this.getActivitiesByDate(date);
    const totalStairs = activitiesOnDate.reduce((total, activity) => {
      return total + activity.flightsOfStairs;
    }, 0)
    return Math.round(totalStairs / activitiesOnDate.length);
  }

}

if (typeof module !== 'undefined') {
  module.exports = ActivityRepo;
}
