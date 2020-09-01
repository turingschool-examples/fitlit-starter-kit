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

  getEntriesForDate(date) {
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

  getWeekOfData(user, endDate) {
    const entries = this.getUserEntries(user)
    const endingIndex = entries.map(endingEntry => {
      return endingEntry.date
    }).indexOf(endDate);
    const weekOfData = (entries.slice(endingIndex - 6, endingIndex + 1))
    return weekOfData
  }

  calculateAvgMinutesForWeek(user, endDate) {
    const weekOfData = this.getWeekOfData(user, endDate)
    const totalMinutes = weekOfData.reduce((totalMin, day) => {
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
    const entries = this.getEntriesForDate(date)
    const total = entries.reduce((stairs, entry) => {
      return stairs += entry[activity]
    }, 0)
    return parseFloat((total / entries.length).toFixed(0))
  }

  getUsersWhoMetStepGoal(date, activity, userData) {
    const entries = this.getEntriesForDate(date)
    const allUsersAverage = this.calculateAllUsersAverage(date, activity)
    const entriesGoalMet = entries.filter(entry => {
      return entry.numSteps >= allUsersAverage
    })
    const goalMeeters = entriesGoalMet.map(entry => {
      const nameOfUser = userData.find(user => {
        return user.id === entry.userID
      })
      return nameOfUser
    })
    const goalMeetersNames = goalMeeters.map(goalee => goalee.name)
    return goalMeetersNames
  }

  getUserWithMostSteps(date, data) {
    const entries = this.getEntriesForDate(date)
    const sortedUsers = entries.sort((entryA, entryB) => entryB.numSteps - entryA.numSteps)
    const userWithMostSteps = sortedUsers[0]
    const userInfo = data.find(user => user.id === sortedUsers[0].userID)
    return userInfo.name
  }
}

if (typeof module !== 'undefined') {
  module.exports = ActivityRepo;
}