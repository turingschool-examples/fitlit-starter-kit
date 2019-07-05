class Sleep {
  constructor(sleepData) {
    this.sleepData = sleepData;
  }
  avgSleepPerUser(id) {
    let grabUserID = sampleSleep.filter(item => item.userID === id)
    let avgHours = grabUserID.reduce((acc, item) => {
      return acc += item.hoursSlept
  }, 0)
      return avgHours / grabUserID.length;
  }
  totalHrsSleep(id, date) {
    let grabUserID = sampleSleep.filter(item => item.userID === id)
    return grabUserID.find(item => item.date === date).hoursSlept
  }
  sleepQualityForSpecificDay(id, date) {
    let grabUserID = sampleSleep.filter(item => item.userID === id)
    return grabUserID.find(item => item.date === date).sleepQuality
  }
  hrsSleepInDayPerWeek(id, date) {
    let grabUserID = sampleSleep.filter(item => item.userID === id)
    let index = grabUserID.findIndex(day => day.date === date)
    return grabUserID.slice(index - 6, index + 1).map(item => {
      return {date: item.date, hoursSlept: item.hoursSlept}
    })
  }
  sleepQualityInDayPerWeek(id, date) {
    let grabUserID = sampleSleep.filter(item => item.userID === id)
    let index = grabUserID.findIndex(day => day.date === date)
    return grabUserID.slice(index - 6, index + 1).map(item => {
      return {date: item.date, sleepQuality: item.sleepQuality}
    })
  }
}

if (typeof module !== 'undefined') {
  module.exports = Sleep;
}