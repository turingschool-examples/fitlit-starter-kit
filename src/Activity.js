class Activity {
  constructor(activityData, user, userRepo) {
    this.activityData = activityData || null;
    //fix currentUser
    this.currentUser = user || 'gerenic user';
    this.userRepo = userRepo;
  }

  getUserActivityData(activityInfo) {
    let activityData = activityInfo || this.activityData
    return activityData.filter(activity => activity.userID === this.currentUser.id)
  }

  getTodaysActivity(date) {
    return this.activityData.filter(data => data.date === date)
  }

  getUserActivityToday(date) {
    const todaysActivity = this.getTodaysActivity(date)
    return this.getUserActivityData(todaysActivity)[0]
  }

  getMilesWalkedToday(date) {
    const todaysActivity = this.getUserActivityToday(date)
    const totalStepDistance = Math.round(todaysActivity.numSteps * this.currentUser.strideLength)
    return (totalStepDistance / 5280).toFixed(1)
  }

  getUserActivityMinutes(date) {
    const todaysActivity = this.getUserActivityToday(date)
    return todaysActivity.minutesActive
  }

  getWeekActiveMinutesAverage(date) {
    let weeksActivity = []
    const userActivityData = this.getUserActivityData()
    const todaysActivity = this.getUserActivityToday(date)
    const startIndex = userActivityData.indexOf(todaysActivity)
    for (let i = 0; i < 7 ; i++) {
      weeksActivity.push(userActivityData[startIndex - i])
    }
    return weeksActivity
  }

  getWasStepGoalAchieved(date) {
    let todaysActivity = this.getUserActivityToday(date)
    return this.currentUser.dailyStepGoal <= todaysActivity.numSteps ? true : false
  }

  getAllDaysStepGoalWasExceeded() {
    const userActivityData = this.getUserActivityData()
    return userActivityData.filter(data => data.numSteps > this.currentUser.dailyStepGoal)
  }

  getStairClimbRecord() {
    const userActivityData = this.getUserActivityData()
    const sortedActivities = userActivityData.sort((a, b) => b.flightsOfStairs - a.flightsOfStairs)
    return sortedActivities[0].flightsOfStairs
  }

  getAveragesForAll(date, activityType) {
    const todaysActivity = this.activityData.filter(data => data.date === date)
    const allUserStairs = todaysActivity.reduce((acc, activity) => {
      acc += activity[activityType]
      return acc
    }, 0)
    return Math.round(allUserStairs / todaysActivity.length);
  }
}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}
