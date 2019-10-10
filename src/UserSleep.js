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
    }, 0); return parseFloat((hoursSlept / this.userDailyHoursSlept.length).toFixed(2));
  }
  
  avgUserSleepQualityDateAllTime() {
    let sleepQuality = this.userDailySleepQual.reduce((sum, day) => {
      return sum += day;
    }, 0); return parseFloat((sleepQuality / this.userDailySleepQual.length).toFixed(2))
  }

  userSleepHoursByDate(date) {
    return sleepData.filter(item => item.userID === this.id).find(item => item.date === date).hoursSlept
  }

  userSleepQualityByDate(date) {
    return sleepData.filter(item => item.userID === this.id).find(item => item.date === date).sleepQuality
  }

  userDailySleepHoursByWeek() {
    return this.sleepObjs.slice(-7).map(sleep => sleep.hoursSlept);
  }

  userDailySleepQualityByWeek() {
    return this.sleepObjs.slice(-7).map(sleep => sleep.sleepQuality);
  }

}

if (typeof module !== 'undefined') {
  module.exports = UserSleep;
}