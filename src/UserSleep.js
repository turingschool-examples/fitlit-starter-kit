if (typeof module !== "undefined") {
  sleepData = require('../subset_data/sleep-subset');
}

class UserSleep {
  constructor(userData) {
    this.userData = userData;
    this.id = userData.id;
    this.name = userData.name;
    this.sleepObjs = this.filterSleepData();
    this.hoursSleptDay =  this.filteredUserHoursSleptDay();
    this.sleepQualityDay = this.filteredUserSleepQuality();
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
    let sleepHours = this.hoursSleptDay.reduce((sum, day) => {
      sum += day;
      return sum;
    }, 0) / this.hoursSleptDay.length;
    return Number(sleepHours.toFixed(1));
  }

  avgUserSleepQualityDateAllTime() {
    let totSleepQual = this.sleepQualityDay.reduce((sum, day) => {
      sum += day;
      return sum;
    }, 0) / this.hoursSleptDay.length;
    return Number(totSleepQual.toFixed(1))
  }


  //   userSleepHoursByDate() {

  //   }

  //   userSleepQualityByDate() {

  //   }

  //   userDailySleepHoursByWeek() {

  //   }

  //   userDailySleepQualityByWeek() {

  //   }

}

if (typeof module !== 'undefined') {
  module.exports = UserSleep;
}