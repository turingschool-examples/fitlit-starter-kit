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
  
  getUserEntries(user) {
    return this.activityData.filter(userEntry => {
      return user.id === userEntry.userID
    });
  }

  calculateAvgMinutesForWeek(user, endDate) {
    const entries = this.getUserEntries(user)
    const endingIndex = entries.map(endingEntry => {
      return endingEntry.date
    }).indexOf(endDate);
    const weekData = (entries.slice(endingIndex - 6, endingIndex + 1))
    const totalMinutes = weekData.reduce((totalMin, day) => {
      return totalMin += day.minutesActive
    }, 0)
    return parseFloat((totalMinutes / 7).toFixed(0))
  }
}

if (typeof module !== 'undefined') {
  module.exports = ActivityRepo;
}