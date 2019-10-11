class SleepUser {
  constructor(userSleepData){
  this.sleepData = userSleepData;
  }

  calcAvgSleepPerDay(property) {
    let totalSleepQuality = this.sleepData.reduce((acc, day) => {
      acc += day[property];
      return acc;
    }, 0);
    let avgSleepQuality = totalSleepQuality / this.sleepData.length;
    return Math.round(avgSleepQuality * 100) / 100;
  }

  getTimeSleptDay(date, property) {
    return this.sleepData.reduce((acc, object) => {
      if(object.date === date) {
        acc += object[property];
      }
      return acc;
    }, 0)
  }

}


if (typeof module !== 'undefined') {
  module.exports = SleepUser;
}
