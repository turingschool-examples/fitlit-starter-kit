class Activity {
  constructor(activityData) {
    this.activity = activityData;
  }

  milesWalkedByDay(user, date) {

    const currentUserActivity = this.activity.filter(data => data.userID === user.id)

    const userActivity = currentUserActivity.filter(data => data.date === date)

    const miles = (userActivity[0].numSteps * user.strideLength) / 5280
    return miles.toFixed(2)
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
      return 'Congrats! You did it!'
    } else {
      return 'Better luck next time!'
    }
  }

  todaysStepCount(user, date) {
    const currentUserActivity = this.activity.filter(data => data.userID === user.id)
    const userActivity = currentUserActivity.filter(data => data.date === date)
    return userActivity[0].numSteps
  }
  weeklyStepCount(user, date) {

    const currentUserActivity = this.activity.filter(data => data.userID === user.id)
    const userActivity = currentUserActivity.filter(data => data.date <= date).sort((a, b) => {
      return new Date(b.date)- new Date(a.date)
    }).map(data => data.numSteps)
    const weeklySteps = userActivity.slice(0, 7)
    return weeklySteps
  }

}

export default Activity