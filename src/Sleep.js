class Sleep {
  constructor(sleepData) {
    this.sleepData = sleepData
  }

  findIdHelper(id) {
    let specificUserIntake = this.sleepData.filter(function(aUser) {
      return aUser.userID === id
    })
    return specificUserIntake;
  }
  calculateAverageDailySleepHours(id) {
    let userSleepData = this.findIdHelper(id).map(function(aUser) {
      return aUser.hoursSlept
    }) 
    let totalHoursSlept = userSleepData.reduce(function(total, hours) {
      return total = total + hours
    }, 0 )
    let averageHoursSlept = totalHoursSlept / userSleepData.length
    let roundedHoursSlept = averageHoursSlept.toFixed(2)
    return Number(roundedHoursSlept)
  }

  calculateAverageSleepQuality(id) {
    let userSleepData = this.findIdHelper(id).map(function(aUser) {
      return aUser.sleepQuality
    }) 
    let totalSleepQuality = userSleepData.reduce(function(total, quality) {
      return total = total + quality
    }, 0 )
    let averageSleepQuality = totalSleepQuality / userSleepData.length
    let roundedQualitySleep = averageSleepQuality.toFixed(2)
    return Number(roundedQualitySleep) 
  }

  displayHoursSlept(id, date) {
    let dateOfUserIntake = this.findIdHelper(id).find(function(aUser) {
      return aUser.date === date
    });
    return dateOfUserIntake.hoursSlept;
  }

  displaySleepQuality(id, date) {
    let dateOfUserIntake = this.findIdHelper(id).find(function(aUser) {
      return aUser.date === date
    });
    return dateOfUserIntake.sleepQuality;
  }

  displayWeeklySleep(id) {
    let user = this.findIdHelper(id)
    let userWeeklySleep = user.map(function(aUser) {
      return aUser.hoursSlept
    })
    if (userWeeklySleep.length > 7) {
      userWeeklySleep.length = 7;
    }
    console.log(userWeeklySleep)
    return userWeeklySleep;
  }

  displayWeeklySleepQuality(id) {
    let user = this.findIdHelper(id)
    let userWeeklySleepQuality = user.map(function(aUser) {
      return aUser.sleepQuality
    })
    if (userWeeklySleepQuality.length >= 7) {
      userWeeklySleepQuality.shift();
    }
    return userWeeklySleepQuality;
  }

  displayRecordSleepQuality(id) {
    let userId = this.findIdHelper(id);
    let sleepQualityList = userId.map(function(aUser) {
      return aUser.sleepQuality
    })
    let mostQualitySleep = Math.max(...sleepQualityList)
    let bestSleepDate = userId.find(function(ourUser) {
      return ourUser.sleepQuality === mostQualitySleep
    })
    let sleepRecord = []
    sleepRecord.push(bestSleepDate.date)
    sleepRecord.push(bestSleepDate.sleepQuality)
    return sleepRecord
  }

    displayRecordHoursSlept(id) {
    let userId = this.findIdHelper(id);
    let sleepHoursList = userId.map(function(aUser) {
      return aUser.hoursSlept
    })
    let mostHoursSlept = Math.max(...sleepHoursList)
    let mostSleepDate = userId.find(function(ourUser) {
      return ourUser.hoursSlept === mostHoursSlept
    })
    let sleepHoursRecord = []
    sleepHoursRecord.push(mostSleepDate.date)
    sleepHoursRecord.push(mostSleepDate.hoursSlept)
    return sleepHoursRecord
  }


}


if (typeof module !== 'undefined') {
  module.exports = Sleep;
}