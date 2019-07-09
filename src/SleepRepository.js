// const User = require('../src/User');
// const userData = require('../test-data/users-fixtures')


class SleepRepository {
  constructor(sleepData) {
    this.sleepData = sleepData
  }

  calculateAverageUsersSleepQuality() {
    let allSleepQuality = this.sleepData.map(function(aUser) {
      return aUser.sleepQuality
    })
    let totalSleepQuality = allSleepQuality.reduce(function(total, quality) {
      return total = total + quality
    }, 0)
    let averageSleepQuality = totalSleepQuality / allSleepQuality.length 
    let roundedAverageSleepQuality = averageSleepQuality.toFixed(1)
    return Number(roundedAverageSleepQuality)
  }

  displayHeaviestSleeper(date) {
    let user = new User(userData);
    let specificDateSleep = this.sleepData.filter(function(aUser) {
      return aUser.date === date 
    })
    let amountSlept = specificDateSleep.map(function(oneUser) {
      return oneUser.hoursSlept
    })
    let mostSleep = Math.max(...amountSlept)
    let idWithMostSleep = specificDateSleep.find(function(ourUser) {
      return ourUser.hoursSlept === mostSleep
    })
    let userWhoSleptMost = user.userData.find(function(thisUser) {
      return thisUser.id === idWithMostSleep.userID
    })
    return userWhoSleptMost.name
  }
}

if (typeof module !== 'undefined') {
  module.exports = SleepRepository;
}