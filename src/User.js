class User {
  constructor(userData, sleepData, hydrationData) {
    this.userData = userData;
    this.sleepData = sleepData;
    this.hydrationData = hydrationData;
  }

  getFirstName() {
    return this.userData.name.split(' ')[0];
  }

  // Hydration
  getAvgDailyWater(userID) {
    let matchedIDS = this.hydrationData.hydrationData.filter((user) => {
      return user.userID === userID
    })
    let avg = matchedIDS.reduce((acc, curr) => {
      acc += curr.numOunces
      return acc
    }, 0)
    return avg / matchedIDS.length
  }

  getWaterPerDay(date) {
    let dates = this.hydrationData.hydrationData.filter((user) => {
      return user.date === date
    })
    return dates.reduce((acc, curr) => {
      if (curr.userID === this.userData.id) {
        acc = curr.numOunces
      }
      return acc
    }, 0)
  }

  getWeeklyConsumption() {
    let userWeeklyH20 = this.hydrationData.hydrationData.filter(user => {
      return user.userID === this.userData.id;
    })

    let weeklyWater = userWeeklyH20.slice(-7);

    let filteredWater = weeklyWater.map(user => {
      let date = user.date;
      let numOunces = user.numOunces;
      let both = {};
      both[date] = numOunces;
      return both;
    })
    return filteredWater;
  }

  // Sleep
  getAverageDailySleep() {
    let specificUserSleepData = this.getUserSleepData()
    let totalHours = specificUserSleepData.reduce((acc, user) => {
      acc += user.hoursSlept
      return acc
    }, 0)
    let averageHours = totalHours / specificUserSleepData.length
    return Number(averageHours.toFixed(2))
  }

  getUserSleepData() {
    let userOverallSleepData = this.sleepData.sleepData.filter(user => {
      return user.userID === this.userData.id;
    })
    return userOverallSleepData
  }

  getOverallQualityAvg() {
    let specificUserSleepQuality = this.getUserSleepData()
    let totalQuality = specificUserSleepQuality.reduce((acc, user) => {
      acc += user.sleepQuality
      return acc
    }, 0)
    let averageQuality = totalQuality / specificUserSleepQuality.length
    return Number(averageQuality.toFixed(2))
  }

  sleepOnSpecificDate(date) {
    let dates = this.sleepData.sleepData.filter((user) => {
      return user.date === date
    })
    return dates.reduce((acc, curr) => {
      if (curr.userID === this.userData.id) {
        acc = curr.hoursSlept
      }
      return acc
    }, 0)
  }

  sleepQualityOnSpecificDate(date) {
    let dates = this.sleepData.sleepData.filter((user) => {
      return user.date === date
    })
    return dates.reduce((acc, curr) => {
      if (curr.userID === this.userData.id) {
        acc = curr.sleepQuality
      }
      return acc
    }, 0)
  }

  givenWeekSleepDataByDay() {
    let userWeeklySleep = this.sleepData.sleepData.filter(user => {
      return user.userID === this.userData.id;
    })

    const last7SleepDays = userWeeklySleep.slice(-7);

    let filteredSleep = last7SleepDays.map(user => {
      let sleepDate = user.date;
      let sleepHours = user.hoursSlept;
      let both = {};
      both[sleepDate] = sleepHours;
      return both;
    })

    return filteredSleep;
  }

  givenWeeksSleepQualityByDay() {
    let userWeeklySleep = this.sleepData.sleepData.filter(user => {
      return user.userID === this.userData.id;
    })

    const last7SleepDays = userWeeklySleep.slice(-7);

    let filteredQuality = last7SleepDays.map(user => {
      let sleepDate = user.date;
      let sleepQuality = user.sleepQuality;
      let both = {};
      both[sleepDate] = sleepQuality;
      return both;
    })

    return filteredQuality;
  }

  averageSleepQuality() {
    let totalQuality = this.sleepData.sleepData.reduce((acc, user) => {
      acc += user.sleepQuality
      return acc
    }, 0)
    let averageQuality = totalQuality / this.sleepData.sleepData.length
    return Number(averageQuality.toFixed(2))
  }

}

export default User;