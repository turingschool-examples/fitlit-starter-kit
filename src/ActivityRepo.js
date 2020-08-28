class ActivityRepo {
  constructor(data) {
    this.activityData = data
  }

  calculateMilesWalked(user, date) {
    const activityEntry = this.activityData.find(entry => entry.date === date && entry.userID === user.id)
    const milesWalked = (user.strideLength * activityEntry.numSteps) / 5280

    return parseFloat(milesWalked.toFixed(2))
    // find activity entry by date and user.id
    // user.strideLength * activity.numSteps
    // divide by 5280
  }
}

if (typeof module !== 'undefined') {
  module.exports = ActivityRepo;
}