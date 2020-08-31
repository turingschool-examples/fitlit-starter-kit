class SleepRepo {
  constructor(sleepData) {
    this.sleepData = sleepData
  }

  findDataByID(userID) {
    const entries = this.sleepData.filter(userEntry => {
      return userID === userEntry.userID
    });
    return entries
  }

  groupUsers() {
    let adjustedData = {};
    this.sleepData.forEach(user => {
      if (adjustedData[user.userID]) {
        adjustedData[user.userID].push(user.sleepQuality)
      } else {
        adjustedData[user.userID] = [user.sleepQuality];
      }
    })
    return adjustedData
  }

  findNightlySleep(userID, date) {
    const entries = this.findDataByID(userID)
    const singleNightSleep = entries.find(userEntry => {
      return date === userEntry.date
    })
    return singleNightSleep.hoursSlept
  }

  calculateAvgSleep(userID) {
    const entries = this.findDataByID(userID);
    const totalSleep = entries.reduce((total, data) => {
      total += data.hoursSlept
      return total
    }, 0)
    return totalSleep / entries.length
  }

  findNightlySleepQuality(userID, date) {
    const entries = this.findDataByID(userID)
    const singleNightSleep = entries.find(userEntry => {
      return date === userEntry.date
    })
    return singleNightSleep.sleepQuality
  }

  avgSleepQualityForAll() {
    const totalSleepQuality = this.sleepData.reduce((total, data) => {
      total += data.sleepQuality
      return total
    }, 0)
    const initialResult =  totalSleepQuality / this.sleepData.length
    const roundedResult = Math.round((initialResult + Number.EPSILON) * 100) / 100
    return roundedResult
  }

  findWeeklyQualityForEveryUser(endDate) {
    const allUsers = this.allUsers()
    const individualUserQuality = [];
    allUsers.forEach(user => {
      individualUserQuality.push(this.weeklyIndividualSleepQualityAvg(user, endDate))
    })
    return individualUserQuality
  }

  allUsers() {
    const everyUser = [];
    this.sleepData.forEach(user => {
      if (!everyUser.includes(user.userID)) {
        everyUser.push(user.userID)
      }
    })
    return everyUser
  }

  weeklyIndividualSleepQualityAvg(userID, endDate) {
    const weekOfSleep = this.findWeekOfSleep(userID, endDate)
    const totalSleepQuality = weekOfSleep.reduce((total, data) => {
      total += data.sleepQuality
      return total
    }, 0)
    const initialResult =  totalSleepQuality / weekOfSleep.length
    const roundedResult = Math.round((initialResult + Number.EPSILON) * 100) / 100
    return {
        userID: userID,
        qualityAvg: roundedResult,
    };
  }

  findWeekOfSleep(userID, endDate) {
    const entries = this.findDataByID(userID)
    const endingIndex = entries.map(singleEntry => {
      return singleEntry.date
    }).indexOf(endDate);
    const startingIndex = endingIndex - 5
    const weekOfSleep = (entries.slice(startingIndex - 1, endingIndex + 1))
    return weekOfSleep
  }

  findAvgTotalSleepQuality(userID) {
    const entries = this.findDataByID(userID);
    const totalSleepQuality = entries.reduce((total, data) => {
      total += data.sleepQuality
      return total
    }, 0)
    const initialResult =  totalSleepQuality / entries.length
    const roundedResult = Math.round((initialResult + Number.EPSILON) * 100) / 100
    return roundedResult
  }

  topSleepQuality(endDate) {
    const allWeeklyQualityData = this.findWeeklyQualityForEveryUser(endDate)
    const topSleepers = allWeeklyQualityData.filter(user => {
      return user.qualityAvg > 3
    })
    return topSleepers
  }

  namesOfBestSleepers(endDate, userData) {
    const topSleepers = this.topSleepQuality(endDate)
    const topSleeperNames = topSleepers.map(sleeper => {
      const nameOfUser = userData.find(user => {
        return sleeper.userID === user.id
      })
      return nameOfUser.name
    })
    return topSleeperNames
  }

  namesOfMostRestedPeople(date, userData) {
    const restedPeople = this.restedPeople(date, userData)
    const restedPeopleNames = restedPeople.map(sleeper => {
      const nameOfUser = userData.find(user => {
        return sleeper.userID === user.id
      })
      return nameOfUser.name
    })
    return restedPeopleNames
  }

  restedPeople(date, userData) {
    const sleepByDate = this.findDailySleepForAll(date);
    sleepByDate.sort((entryA, entryB) => {
      return entryB.hoursSlept - entryA.hoursSlept
    })
    const sleepiestPeople = sleepByDate.filter(user => {
      return sleepByDate[0].hoursSlept === user.hoursSlept
    })
    return sleepiestPeople
  }

  findDailySleepForAll(date) {
    const sleptDate = this.sleepData.filter(entry => {
      return date === entry.date
    })
    return sleptDate
  }

  namesOfLeastRestedPeople(date, userData) {
    const tiredPeople = this.tiredPeople(date, userData)
    const tiredPeopleNames = tiredPeople.map(sleeper => {
      const nameOfUser = userData.find(user => {
        return sleeper.userID === user.id
      })
      return nameOfUser.name
    })
    return tiredPeopleNames
  }

  tiredPeople(date, userData) {
    const sleepByDate = this.findDailySleepForAll(date);
    sleepByDate.sort((entryA, entryB) => {
      return entryA.hoursSlept - entryB.hoursSlept
    })
    const sleepiestPeople = sleepByDate.filter(user => {
      return sleepByDate[0].hoursSlept === user.hoursSlept
    })
    return sleepiestPeople
  }


};







if (typeof module !== 'undefined') {
  module.exports = SleepRepo;
}
