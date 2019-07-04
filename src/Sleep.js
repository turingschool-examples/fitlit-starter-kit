class Sleep {
  constructor(sleepData) {
    this.sleepData = sleepData
  }

   findIdHelper(id) {
    let specificUserIntake = this.sleepData.filter(function(object) {
      return object.userID === id
    })
    return specificUserIntake;
  }
  calculateAverageDailySleepHours(id) {
    let userSleepData = this.findIdHelper(id).map(function(obj){
      return obj.hoursSlept
    }) 
    let totalHoursSlept = userSleepData.reduce(function(acc, curVal){
      return acc = acc + curVal
    }, 0 )
    let averageHourSlept = totalHoursSlept / userSleepData.length
    return averageHourSlept 
    }

    calculateAverageSleepQuality(id) {
    let userSleepData = this.findIdHelper(id).map(function(obj){
      return obj.sleepQuality
    }) 
    let totalSleepQuality = userSleepData.reduce(function(acc, curVal){
      return acc = acc + curVal
    }, 0 )
    let averageSleepQuality = totalSleepQuality / userSleepData.length
    return averageSleepQuality 
    }

    displayHoursSlept(id, date){
      let dateOfUserIntake = this.findIdHelper(id).find(function(obj) {
      return obj.date === date
      });
      return dateOfUserIntake.hoursSlept;
    }

    displaySleepQuality(id, date) {
      let dateOfUserIntake = this.findIdHelper(id).find(function(obj) {
      return obj.date === date
      });
      return dateOfUserIntake.sleepQuality;
    }

    displayWeeklySleep(id) {
      let user = this.findIdHelper(id)
      let userWeeklySleep = user.map(function(obj){
        return obj.hoursSlept
      })
      if (userWeeklySleep.length >= 7) {
      userWeeklySleep.shift();
      }
      return userWeeklySleep;
    }

    displayWeeklySleepQuality(id) {
      let user = this.findIdHelper(id)
      let userWeeklySleepQuality = user.map(function(obj){
        return obj.sleepQuality
      })
      if (userWeeklySleepQuality.length >= 7) {
      userWeeklySleepQuality.shift();
      }
      return userWeeklySleepQuality;
    }

  // displayMostActiveDay(id){
  //   let userId = this.findIdHelper(id);
  //   let minutesActiveList = userId.map(function(obj){
  //     return obj.minutesActive
  //   })
  //   let mostActiveMinutes = Math.max(...minutesActiveList)
  //   let mostActiveDate = userId.find(function(obj){
  //     return obj.minutesActive === mostActiveMinutes
  //   })
  //   return mostActiveDate.date
  // }

}


module.exports = Sleep;