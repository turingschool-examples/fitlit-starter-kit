const User = require('../src/User');
const userData = require('../test-data/users-fixtures')


class SleepRepository {
  constructor(sleepData) {
    this.sleepData = sleepData
  }

  calculateAverageUsersSleepQuality() {
    let allSleepQuality = this.sleepData.map(function(obj) {
      return obj.sleepQuality
    })
    let totalSleepQuality = allSleepQuality.reduce(function(total, current) {
      return total = total + current
    }, 0)
    let averageSleepQuality = totalSleepQuality / allSleepQuality.length 
    let roundedAverageSleepQuality = averageSleepQuality.toFixed(1)
    return Number(roundedAverageSleepQuality)
  }

  displayHeaviestSleeper(date) {
    let user = new User(userData);
    let specificDateSleep = this.sleepData.filter(function(obj) {
      return obj.date === date 
    })
    let amountSlept = specificDateSleep.map(function(obj) {
      return obj.hoursSlept
    })
    let mostSleep = Math.max(...amountSlept)
    let idWithMostSleep = specificDateSleep.find(function(obj) {
      return obj.hoursSlept === mostSleep
    })
    let userWhoSleptMost = user.userData.find(function(obj) {
      return obj.id === idWithMostSleep.userID
    })
    return userWhoSleptMost.name
  }
}

module.exports = SleepRepository;