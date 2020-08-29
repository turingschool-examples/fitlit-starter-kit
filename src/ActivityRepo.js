class ActivityRepo {
  constructor(data) {
    this.activityData = data
  }
  
  getActivityEntry(user, date) {
    return this.activityData.find(entry => entry.date === date && entry.userID === user.id)
  }

  getUserEntries(user) {
    return this.activityData.filter(entry => {
      return user.id === entry.userID
    });
  }

  getEntriesforDate(date) {
    return this.activityData.filter(entry => entry.date === date)
  }

  // getEntriesSubset(key, value) {
  //   return thisActivityData.filter(entry => entry[key] === value)
  // }

  // editDecimals(number, decimal) {
  //   return parseFloat(number).toFixed(decimal)
  // }

  calculateMilesWalked(user, date) {
    const activityEntry = this.getActivityEntry(user, date)
    const milesWalked = (user.strideLength * activityEntry.numSteps) / 5280

    return parseFloat(milesWalked.toFixed(2))
  }

  findMinutesActive(user, date) {
    const activityEntry = this.getActivityEntry(user, date)
    return activityEntry.minutesActive
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

  findIfStepGoalMet(user, date) {
    const activityEntry = this.getActivityEntry(user, date)
    // if (user.dailyStepGoal <= activityEntry.numSteps) {
    //   return true
    // } else {
    //   return false
    // }
    return user.dailyStepGoal <= activityEntry.numSteps ? true : false
  }

  getDatesGoalWasMet(user) {
    const entries = this.getUserEntries(user)
    const datesGoalMet = entries.filter(entry => user.dailyStepGoal <= entry.numSteps)
    return datesGoalMet
  }

  getClimbingRecord(user) {
    const entries = this.getUserEntries(user)
    entries.sort((entryA, entryB) => entryB.flightsOfStairs - entryA.flightsOfStairs)
    return entries[0]
  }

  calculateAllUsersAverage(date, activity) {
    const entries = this.getEntriesforDate(date)
    const total = entries.reduce((stairs, entry) => {
      return stairs += entry[activity]
    }, 0)
    return parseFloat((total / entries.length).toFixed(0))
  }
}

if (typeof module !== 'undefined') {
  module.exports = ActivityRepo;
}