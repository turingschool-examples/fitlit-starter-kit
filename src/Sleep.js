class Sleep {
  constructor(sleepData, user) {
    this.sleepData = sleepData;
    this.currentUser = user;
  }

  getUserSleepData() {
    return this.sleepData.filter(sleep => sleep.userID === this.currentUser.id)
  }

  getAverageDailySleep() {
    let userSleepData = this.getUserSleepData()
    let userAverage = userSleepData.reduce((acc, userData) => {
      acc += userData.hoursSlept
      return acc
    }, 0)
    let average = (userAverage / userSleepData.length).toFixed(2)
    return parseFloat(average)
  }

  getAverageSleepQuality() {
    let userSleepData = this.getUserSleepData()
    let qualityAverage = userSleepData.reduce((acc, userData) => {
      acc += userData.sleepQuality
      return acc
    }, 0)
    let average = (qualityAverage / userSleepData.length).toFixed(2)
    return parseFloat(average)
  }

  getSleepForSpecificDay(date) {
    let userSleepData = this.getUserSleepData()
    if (date) {
      let todaysSleep = userSleepData.find(sleep => sleep.date === date)
      return todaysSleep.hoursSlept
    } else {
      return undefined
    }
  }

  getQualityForSpecificDay(date) {
    let userSleepData = this.getUserSleepData()
    if (date) {
      let todaysQuality = userSleepData.find(quality => quality.date === date)
      return todaysQuality.sleepQuality
    } else {
      return undefined
    }
  } 
  
  getWeekOfSleepData(date) {
    let userSleepData = this.getUserSleepData()
    let todaysSleep = userSleepData.find(sleep => sleep.date === date)
    let startIndex = userSleepData.indexOf(todaysSleep)
    for (var i = 0; i < 7; i++) {
      return (userSleepData[startIndex + i])
    }
  }
  
  getWeekofHoursSlept() {
    let userSleepData = this.getUserSleepData()
    let sleepCounter = 0
    for (var i = 0; i < userSleepData.length; i++) {
      sleepCounter += this.hoursSlept
    }
    return sleepCounter

  }
}

  if (typeof module !== 'undefined') {
    module.exports = Sleep;
  }