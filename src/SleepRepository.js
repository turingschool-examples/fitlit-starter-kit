class SleepRepository {
  constructor(sleepInstanceData) {
    this.sleepInstanceData = sleepInstanceData;
  }

  getSleepData(id) {
    return this.sleepInstanceData.filter(sleep => sleep.userID === id);
  }

  getUserAvgHoursSleptAllTime(id) {
    const allUserSleep = this.getSleepData(id);
    const userTotalHoursSleptAllTime = allUserSleep.reduce((totalHours, sleep) => {
      return totalHours + sleep.hoursSlept;
    }, 0);
    const userAvgNightlyHoursSlept = userTotalHoursSleptAllTime / allUserSleep.length;
    return Math.round(userAvgNightlyHoursSlept * 10) / 10;
  }

  getUserAvgSleepQualityAllTime(id) {
    const allUserSleep = this.getSleepData(id);
    const userTotalSleepQualityAllTime = allUserSleep.reduce((totalSleepQuality, sleep) => {
      return totalSleepQuality + sleep.sleepQuality;
    }, 0);
    const userAvgNightlySleepQuality = userTotalSleepQualityAllTime / allUserSleep.length;
    return Math.round(userAvgNightlySleepQuality * 10) / 10;
  }

  getSleepHoursByDate(id, date) {
    const allUserSleep = this.getSleepData(id);
    const hoursSleptByDate = allUserSleep.find(sleep => sleep.date === date);
    return hoursSleptByDate.hoursSlept;
  }

  getSleepQualityByDate(id, date) {
    const allUserSleep = this.getSleepData(id);
    const ozByDate = allUserSleep.find(sleep => sleep.date === date);
    return ozByDate.sleepQuality;
  }

  getSleepDataByWeek(id, date) {
    const allUserSleep = this.getSleepData(id);
    const sleepDates = allUserSleep.map(sleep => sleep.date);
    const indexOfMatchingSleepDate = sleepDates.indexOf(date);
    return allUserSleep.slice(indexOfMatchingSleepDate - 6, indexOfMatchingSleepDate + 1);
  }

  getAllUsersAvgSleepQualityAllTime() {
    const userTotalSleepQualityAllTime = this.sleepInstanceData.reduce((totalSleepQuality, sleep) => {
      return totalSleepQuality + sleep.sleepQuality;
    }, 0);
    const averageTotalSleepQuality = userTotalSleepQualityAllTime / this.sleepInstanceData.length;
    return Math.round(averageTotalSleepQuality * 10) / 10;
  }

  // Find all users who average a sleep quality greater than 3 for a given week (7 days) - you should be able to calculate this for any week, not just the latest week
  // getSleepQualityOver3(date) {
  // input: array of all sleep objects
  // output: array of ids of users who had sleep quality avg > 3 for a given week
  // 1. get this.sleepInstanceData for week
  // const sleepDates = this.sleepInstanceData.map(sleep => sleep.date);
  //   console.log("sleepDates", sleepDates)
  // const indexOfMatchingSleepDate = sleepDates.indexOf(date);
  //   console.log("indexOfMatchingSleepDate", indexOfMatchingSleepDate)
  // const week = this.sleepInstanceData.slice(indexOfMatchingSleepDate - 6, indexOfMatchingSleepDate + 1);
  //   console.log("week", week)
  // 2.
  // }

  getSleptMostOnDate(date) {
    const ids = [];
    const dateSleepObjects = this.sleepInstanceData.filter(sleep => {
      return sleep.date === date;
    })
    const allHoursSlept = dateSleepObjects.map(sleep => sleep.hoursSlept);
    const max = Math.max(...allHoursSlept);
    dateSleepObjects.forEach(sleep => {
      if (sleep.hoursSlept === max) {
        ids.push(sleep.userID);
      }
    })
    return ids;
  }

}

if (typeof module !== 'undefined') {
  module.exports = SleepRepository;
}
