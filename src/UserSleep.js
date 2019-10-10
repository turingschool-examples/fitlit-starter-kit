if (typeof module !== "undefined") {
  sleepData = require('../subset_data/sleep-subset');
}

class UserSleep {
  constructor(userData) {
    this.userData = userData;
    this.id = userData.id;
    this.name = userData.name;
    this.sleepObjs = this.filterSleepData();
    this.userDailyHoursSlept =  this.filteredUserHoursSleptDay();
    this.userDailySleepQual = this.filteredUserSleepQuality();
  }

  filterSleepData() {
    return sleepData.filter(sleepObj => sleepObj.userID === this.id)
  }

  filteredUserHoursSleptDay() {
    return this.sleepObjs.map(day => day.hoursSlept);
  }
  
  filteredUserSleepQuality() {
    return this.sleepObjs.map(day => day.sleepQuality);
  }

  avgUserHoursSleptPerDay() {
    let hoursSlept = this.userDailyHoursSlept.reduce((sum, day) => {
      return sum += day;
    }, 0) / this.userDailyHoursSlept.length;
    return Number(hoursSlept.toFixed(1));
  }

  avgUserSleepQualityDateAllTime() {
    let sleepQuality = this.userDailySleepQual.reduce((sum, day) => {
      return sum += day;
    }, 0) / this.userDailyHoursSlept.length;
    return Number(sleepQuality.toFixed(1))
  }

  userSleepHoursByDate(date) {
    return sleepData.filter(item => item.userID === this.id).find(item => item.date === date).hoursSlept
  }

  userSleepQualityByDate(date) {
    return sleepData.filter(item => item.userID === this.id).find(item => item.date === date).sleepQuality
  }

  //   userDailySleepHoursByWeek() {

  //   }

  //   userDailySleepQualityByWeek() {

  //   }

}

if (typeof module !== 'undefined') {
  module.exports = UserSleep;
}