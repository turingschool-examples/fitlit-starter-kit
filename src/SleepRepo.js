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

  returnWeekOfDailyHoursSlept(id, date) {
    const currentUserData = this.data.filter(userData => userData.id === id);
    const weekOfDailySleepData = [];
    const endOfWeek = currentUserData.find(userData => userData.date === date);
    const indexOfEndDate = currentUserData.indexOf(endOfWeek);
    for (let i = indexOfEndDate; i >= indexOfEndDate - 6; i--)
    {
    weekOfDailySleepData.push(currentUserData[i].hoursSlept);
    }
    return weekOfDailySleepData;
    }

  returnWeekOfDailySleepQuality(id, date) {
    const currentUserData = this.data.filter(userData => userData.id === id);
    const weekOfDailySleepQualityData = [];
    const endOfWeek = currentUserData.find(userData => userData.date === date);
    const indexOfEndDate = currentUserData.indexOf(endOfWeek);
    for (let i = indexOfEndDate; i >= indexOfEndDate - 6; i--)
    {
    weekOfDailySleepQualityData.push(currentUserData[i].sleepQuality);
    }
    return weekOfDailySleepQualityData;
  }


}

if (typeof module !== 'undefined') {
  module.exports = SleepRepo;
}
