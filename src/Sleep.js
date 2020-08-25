class Sleep {
  constructor() {}
  userSleepData(sleepData, id) {
    this.userSleep = sleepData.filter(dailySleep => dailySleep.userID === id);
    return this.userSleep;
  }
  averageAllTimeSleep() {
    let allTimeSleep = this.userSleep.reduce((sleep, day) =>{
      sleep += day.sleepQuality;
      return sleep
    }, 0)
    return Number((allTimeSleep / this.userSleep.length).toFixed(1))
  }
  daySleep(dateSelected) {
    return this.userSleep.find(day => day.date === dateSelected).hoursSlept;
  }
  dailySleepHoursForWeek(startDate) {
    let startingDate = this.userSleep.find(day => day.date === startDate);
    let firstDay = this.userSleep.indexOf(startingDate);
    return this.userSleep.slice(firstDay, firstDay + 7).map(day => day.hoursSlept)
  }
  dailySleepQualityForWeek(startDate) {
    let startingDate = this.userSleep.find(day => day.date === startDate)
    let firstDay = this.userSleep.indexOf(startingDate)
    return this.userSleep.slice(firstDay, firstDay + 7).map(day => day.sleepQuality)
  }
  averageSleepQualityForAllUsers(allUserData) {
    let average = allUserData.reduce((quality, user) => {
      quality += user.sleepQuality
      return quality
    }, 0)
    return Math.round(average / allUserData.length * 10) / 10;
  }

}
if (typeof module !== 'undefined') {
  module.exports = Sleep;
}
