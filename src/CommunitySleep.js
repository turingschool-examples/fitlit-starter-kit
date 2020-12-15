const Sleep = require('../src/Sleep')

class CommunitySleep {
  constructor(sleep) {
    this.sleeps = sleep.map(sleepForUser => new Sleep(sleepForUser))
  }
  calculateAvgSleepHrsPerDay(userID) {
    const userSleep = this.sleeps.filter(sleeper => (sleeper.userID === userID));
    const amountSlept = userSleep.map(sleeper => sleeper.hoursSlept);
    const avgHoursSlept = (amountSlept.reduce((a, b) => a + b, 0)) / amountSlept.length;
    return avgHoursSlept.toFixed(1);
  }
}
module.exports = CommunitySleep;
