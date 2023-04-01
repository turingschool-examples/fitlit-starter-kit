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
      return true
    } else {
      return false
    }
  }

  todaysStepCount(user, date) {
    const currentUserActivity = this.activity.filter(data => data.userID === user.id)
    // console.log('date', date)
    const userActivity = currentUserActivity.filter(data => data.date === date)
    console.log(userActivity)
    return userActivity[0].numSteps
  }
  weeklyStepCount(user, date) {

    const currentUserActivity = this.activity.filter(data => data.userID === user.id)
    console.log('currentUserActivity', currentUserActivity)
    const userActivity = currentUserActivity.filter(data => data.date <= date).sort((a, b) => {
      return new Date(b.date)- new Date(a.date)
    }).map(data => data.numSteps)
    const weeklySteps = userActivity.slice(0, 7)
    console.log('weekStep', weeklySteps)
    return weeklySteps
  //   console.log('userActivity', userActivity)
  //   // const userStepsWeekly = this.activity.filter(data => data.userID === user.id && date <= this.activity.date)
  //   // .sort((a, b) => {
  //   //   return b.date - a.date
  // // }).map((day) => day.numSteps)
  // // const week = userStepsWeekly.slice(0, 7)
  // // console.log('steps', userStepsWeekly)
  // // console.log('week', week)
  // return week
  // }
  }

}

export default Activity