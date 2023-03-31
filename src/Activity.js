class Activity {
  constructor(activityData) {
    this.activity = activityData;
  }

  milesWalkedByDay(user, date) {

    const currentUserActivity = this.activity.filter(data => data.userID === user.id)

    const userActivity = currentUserActivity.filter(data => data.date === date)

    const miles = Math.round((userActivity[0].numSteps * user.strideLength) / 5280)
    return miles
  }

  minutesActiveByDay(user, date) {
    const currentUserActivity = this.activity.filter(data => data.userID === user.id)

    const userActivity = currentUserActivity.filter(data => data.date === date)

    const minutes = userActivity[0].minutesActive
    return minutes
  }

  reachStepGoal(user, date) {
    const currentUserActivity = this.activity.filter(data => data.userID === user.id)

    const userActivity = currentUserActivity.filter(data => data.date === date)

    if (userActivity[0].numSteps >= user.dailyStepGoal) {
      return true
    } else {
      return false
    }
  }

}

export default Activity