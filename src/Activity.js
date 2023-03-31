class Activity {
  constructor(activityData) {
    this.activity = activityData;
  }

  milesWalkedByDay(user, date) {

    const currentUserActivity = this.activity.filter(data => data.userID === user.id)

    const userActivity = currentUserActivity.filter(data => data.date === date)

    const miles = Math.round((userActivity[0].numSteps * user.strideLength) / 5280)

    return (miles)
  }
}

export default Activity