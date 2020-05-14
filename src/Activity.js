class Activity {
  constructor(activityData, user) {
    this.activityData = activityData || null;
    this.currentUser = user || 'gerenic user';
  }

  getUserActivityData() {
    return this.activityData.filter(activity => activity.userID === this.currentUser.id)
  }

  getMilesWalkedToday(date) {
    let userActivityData = this.getUserActivityData()
    let todaysActivity = userActivityData.find(activity => activity.date === date)
    let totalStepDistance = Math.round(todaysActivity.numSteps * this.currentUser.strideLength)
    return (totalStepDistance / 5280).toFixed(1)
  }
}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}
