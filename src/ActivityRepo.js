class ActivityRepo {
  constructor(data) {
    this.activityData = data
  }
  
  getActivityEntry(user, date) {
    return this.activityData.find(entry => entry.date === date && entry.userID === user.id)
  }
  calculateMilesWalked(user, date) {
    const activityEntry = this.getActivityEntry(user, date)
    const milesWalked = (user.strideLength * activityEntry.numSteps) / 5280

    return parseFloat(milesWalked.toFixed(2))
  }

  findMinutesActive(user, date) {
    const activityEntry = this.getActivityEntry(user, date)
    return activityEntry.minutesActive
  }
}

if (typeof module !== 'undefined') {
  module.exports = ActivityRepo;
}