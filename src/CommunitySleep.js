const Sleep = require('../src/Sleep')

class CommunitySleep {
  constructor(sleep) {
    this.sleeps = sleep.map(sleepForUser => new Sleep(sleepForUser))
  }
  calculateAvgSleepHrsPerDay(userID) {
    const userSleep = this.sleeps.filter(sleeper => (sleeper.userID === userID));
    const amountSlept = userSleep.map(sleeper => sleeper.hoursSlept);
    const avgHoursSlept = (amountSlept.reduce((a, b) => a + b, 0)) / amountSlept.length;
    return Math.round(avgHoursSlept * 10) / 10;
  }
  calculateAvgSleepQualPerDay(userID) {
    const userSleep = this.sleeps.filter(sleeper => (sleeper.userID === userID));
    const sleepQuality = userSleep.map(sleeper => sleeper.sleepQuality);
    const avgSleepQuality = (sleepQuality.reduce((a, b) => a + b, 0)) / sleepQuality.length;
    return Math.round(avgSleepQuality * 10) / 10;
  }
  findHrsSleptOnDay(userID, date) {
    const hoursSlept = this.sleeps.find(sleeper => sleeper.userID === userID && sleeper.date === date);
    return hoursSlept.hoursSlept;
  }
  findSleepQualityOnDay(userID, date) {
    const sleepQuality = this.sleeps.find(sleeper => sleeper.userID === userID && sleeper.date === date);
    return sleepQuality.sleepQuality;
  }
  calculateSleepWeek(userID, startDate, endDate) {
    
  }
}
module.exports = CommunitySleep;
