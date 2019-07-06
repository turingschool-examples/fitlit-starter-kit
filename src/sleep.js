class Sleep {
  constructor(sampleSleep) {
    this.sampleSleep = sampleSleep;
  }
  avgSleepPerUser(id) {
    let grabUserID = this.sampleSleep.filter(item => item.userID === id)
    let avgHours = grabUserID.reduce((acc, item) => {
      return acc += item.hoursSlept
  }, 0)
      return avgHours / grabUserID.length;
  };
  avgSleepQualityPerDay(id, date) {
    let grabUserID = this.sampleSleep.filter(item => item.userID === id)
    let avgSleepQuality = grabUserID.reduce((acc,item) => {
      return acc += item.sleepQuality
    }, 0)
      return avgSleepQuality / grabUserID.length
  }
  hrsSleepInDayForSpecificDay(id, date) {
    let grabUserID = this.sampleSleep.filter(item => item.userID === id)
    return grabUserID.find(item => item.date === date).hoursSlept
  };
  sleepQualityForSpecificDay(id, date) {
    let grabUserID = this.sampleSleep.filter(item => item.userID === id)
    return grabUserID.find(item => item.date === date).sleepQuality
  };
  hrsSleepInDayPerWeek(id, date) {
    let grabUserID = this.sampleSleep.filter(item => item.userID === id)
    let index = grabUserID.findIndex(day => day.date === date)
    return grabUserID.slice(index - 6, index + 1).map(item => {
      return {date: item.date, hoursSlept: item.hoursSlept}
    })
  };
  sleepQualityInDayPerWeek(id, date) {
    let grabUserID = this.sampleSleep.filter(item => item.userID === id)
    let index = grabUserID.findIndex(day => day.date === date)
    return grabUserID.slice(index - 6, index + 1).map(item => {
      return {date: item.date, sleepQuality: item.sleepQuality}
    })
  };
  averageHoursOfSleepForAllUsers() {
    let averageUserSleep = this.sampleSleep.reduce((acc, day) => {
      return acc += day.hoursSlept 
    },0) / this.sampleSleep.length
    return Number(averageUserSleep.toFixed(2))
  };
  averageSleepQualityNumber(date, qualitySleepNumber) {
    const uniqueUserIds =[]
    const goodSleepers = []

    this.sampleSleep.forEach(user => {
      if(!uniqueUserIds.includes(user.userID)){
        uniqueUserIds.push(user.userID)
      }
    })
    uniqueUserIds.forEach(id => {
      let grabUserInfoById = this.sampleSleep.filter(item => item.userID === id)
      let index = grabUserInfoById.findIndex(day => day.date === date)
      let diffWeeks = grabUserInfoById.slice(index - 6, index + 1).map(item => {
        return {userid: id, date: item.date, sleepQuality: item.sleepQuality}
      })
      const sleepQualityAverage = diffWeeks.reduce((acc, item) => {
        return acc += item.sleepQuality
      }, 0) / diffWeeks.length
    // console.log('sleepQualityAverage', sleepQualityAverage)
      if(sleepQualityAverage >= qualitySleepNumber){
        goodSleepers.push(id)
      }
    })
    return goodSleepers
  };
  leastHourSlept() {  
    return this.sampleSleep.reduce((minAcc, day) => day.hoursSlept < minAcc ? day.hoursSlept : minAcc, this.sampleSleep[0].hoursSlept);
  };
}

if (typeof module !== 'undefined') {
  module.exports = Sleep;
}