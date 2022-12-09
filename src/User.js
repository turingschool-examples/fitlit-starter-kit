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

    return userWeeklyH20.slice(-7);
  }

  // Sleep
  getAverageDailySleep() {
    let specificUserSleepData = this.getUserSleepData()
    console.log("Specific ", specificUserSleepData)
    let totalHours = specificUserSleepData.reduce((acc, user) => {
      acc += user.hoursSlept
      console.log(acc)
      return acc
    }, 0)
    let averageHours = totalHours / specificUserSleepData.length
    return averageHours
  }

  getUserSleepData() {
    let userOverallSleepData = this.sleepData.sleepData.filter(user => {
      return user.userID === this.userData.id;
    })
    return userOverallSleepData
  }

  getOverallQualityAvg() {
    let specificUserSleepQuality = this.getUserSleepData()
    //console.log("Specific ", specificUserSleepData)
    let totalQuality = specificUserSleepQuality.reduce((acc, user) => {
      acc += user.sleepQuality
      console.log(acc)
      return acc
    }, 0)
    let averageQuality = totalQuality / specificUserSleepQuality.length
    return averageQuality
  }

  sleepOnSpecificDate(date) {
    let dates = this.sleepData.sleepData.filter((user) => {
      return user.date === date
    })
    console.log('hi', dates)
    return dates.reduce((acc, curr) => {
      if (curr.userID === this.userData.id) {
        acc = curr.hoursSlept
      }
      return acc
    }, 0)
  }

  sleepQualityOnSPecificDate(date) {
    let dates = this.sleepData.sleepData.filter((user) => {
      return user.date === date
    })
    console.log('hi', dates)
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

    console.log('hi', filteredSleep)

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

    console.log('hi', filteredQuality)

    return filteredQuality;
  }

  averageSleepQuality() {

    //console.log("Specific ", specificUserSleepData)
    let totalQuality = this.sleepData.sleepData.reduce((acc, user) => {
      acc += user.sleepQuality
      console.log(acc)
      return acc
    }, 0)
    let averageQuality = totalQuality / this.sleepData.sleepData.length
    console.log('avg uality', averageQuality)
    return Number(averageQuality.toFixed(2))
  }

}


//For a user (identified by their userID), the average number of hours slept per day
export default User;