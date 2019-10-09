if (typeof module !== "undefined") {
  sleepData = require('../subset_data/sleep-subset');
}

class UserSleep {
  constructor (userData) {
    this.userData = userData;
    this.id = userData.id;
    this.sleepObj = this.filterSleepData()
    // this.sleepData = sleepData;
  }

  filterSleepData() {
    return sleepData.filter(sleep => sleep.userID === this.id)
  }

  // userSleepHoursByDate() {
    
  // }

  //   avgUserHoursSleptDateAllTime() {

  //   }

  //   avgUserSleepQualityDateAllTime() {

  //   }

  //   userSleepQualityByDate() {

  //   }

  //   userSleepByWeek() {

  //   }

  //   userSleepQualityByWeek() {

  //   }

}

if (typeof module !== 'undefined') {
  module.exports = UserSleep;
}