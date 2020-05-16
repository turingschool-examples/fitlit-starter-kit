class Activity {
  constructor(activityData, user, userRepo, todaysDate) {
    this.activityData = activityData || null;
    //fix currentUser
    this.currentUser = user || {id: 0, name: 'no user'};
    this.userRepo = userRepo;
    this.todaysDate = todaysDate;
  }

  getUserActivityData(activityInfo) {
    let activityData = activityInfo || this.activityData
    return activityData.filter(activity => activity.userID === this.currentUser.id)
  }

  getTodaysActivity(date) {
    const specifiedDate = date || this.todaysDate
    return this.activityData.filter(data => data.date === specifiedDate)
  }

  getUserActivityToday(date) {
    const specifiedDate = date || this.todaysDate
    const todaysActivity = this.getTodaysActivity(specifiedDate)
    return this.getUserActivityData(todaysActivity)[0]
  }

  getMilesWalkedToday(date) {
    const specifiedDate = date || this.todaysDate
    const todaysActivity = this.getUserActivityToday(specifiedDate)
    const totalStepDistance = Math.round(todaysActivity.numSteps * this.currentUser.strideLength)
    return (totalStepDistance / 5280).toFixed(1)
  }

  getUserActivityMinutes(date) {
    const specifiedDate = date || this.todaysDate
    const todaysActivity = this.getUserActivityToday(specifiedDate)
    return todaysActivity.minutesActive
  }

  getWeekActiveMinutesAverage(date) {
    const specifiedDate = date || this.todaysDate
    let weeksActivity = []
    const userActivityData = this.getUserActivityData()
    const todaysActivity = this.getUserActivityToday(specifiedDate)
    const startIndex = userActivityData.indexOf(todaysActivity)
    for (let i = 0; i < 7 ; i++) {
      weeksActivity.push(userActivityData[startIndex - i])
    }
    console.log(weeksActivity);
    return weeksActivity
  }

  getWasStepGoalAchieved(date) {
    const specifiedDate = date || this.todaysDate
    let todaysActivity = this.getUserActivityToday(specifiedDate)
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
    const specifiedDate = date || this.todaysDate
    const todaysActivity = this.activityData.filter(data => data.date === specifiedDate)
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
