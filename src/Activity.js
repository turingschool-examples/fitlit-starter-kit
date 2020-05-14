class Activity {
  constructor(activityData, user) {
    this.activityData = activityData || null;
    this.currentUser = user || 'gerenic user';
  }

  getUserActivityData() {
    return this.activityData.filter(activity => activity.userID === this.currentUser.id)
  }

  getUserActivityToday(date) {
    const userActivityData = this.getUserActivityData()
    return userActivityData.find(activity => activity.date === date)
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
    console.log(weeksActivity);
    return weeksActivity
  }
}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}
