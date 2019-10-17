class Sleep {
  constructor(sleepTestData) {
    this.userData = sleepTestData;
  }

  findHoursSleptByDay(date, id) {
    let userId = this.userData.filter(sleep => sleep.userID === id);
    let userDate = userId.find(sleep => sleep.date === date);
    return userDate.hoursSlept;
  }

  averageSleepQualityAllTime(id) {
    let userId = this.userData.filter(sleep => sleep.userID === id);
    return userId.reduce(function(acc, val) { 
      acc += val.sleepQuality;
      return Math.round(acc) / userId.length;
    }, 0);
  }

  findSleepQualityByDate(date, id) {
    let userId = this.userData.filter(sleep => sleep.userID === id);
    let userDate = userId.find(sleep => sleep.date === date);
    return userDate.sleepQuality;
  }

  calculateWeeklyHoursSlept(date, id) {
    let userId = this.userData.filter(sleep => sleep.userID === id);
    let weekSleepData = userId.map(day => {
      return day.hoursSlept
    });
    return weekSleepData.slice(0, 7);
  }

  findSleepQualityWeekly(date, id) {
    let userId = this.userData.filter(sleep => sleep.userID === id);
    let weekSleepData = userId.map(day => {
      return day.sleepQuality
    });
    return weekSleepData.slice(0, 7);
  }

  allUserSleepQuality() {
    return this.userData.reduce(function(acc, val) {
      acc += val.sleepQuality;
      return Math.round(acc);
    }, 0)
 }
 
 }

 module.exports = Sleep; 