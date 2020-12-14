const Sleep = require('../src/Sleep');

class SleepRepo {
  constructor(data) {
    this.data = data.map(userData => new Sleep(userData));
  }
  returnAverageHoursSleptPerDay(userID) {
    const currentUserData = this.data.filter(data => data.id === userID);
    const totalHoursSlept = currentUserData.reduce((acc, cur) => {
      return acc + cur.hoursSlept;
    }, 0);
    const avgHoursSlept = totalHoursSlept / currentUserData.length;
    return avgHoursSlept;
  }
  returnOverallAverageSleepQuality(userID) {
    const currentUserData = this.data.filter(data => data.id === userID);
    const totalSleepQuality = currentUserData.reduce((acc, cur) => {
      return acc + cur.sleepQuality;
    }, 0);
    const avgSleepQuality = totalSleepQuality / currentUserData.length
    return avgSleepQuality;
  }
}

if (typeof module !== 'undefined') {
  module.exports = SleepRepo;
}
