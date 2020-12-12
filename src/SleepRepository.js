class SleepRepo {
  constructor(allSleep) {
    this.allSleep = allSleep;
  }

  getSleepById(id) {
    return this.allSleep.filter(sleep => sleep.userID === id);
  }

  getUserAvgHrsSleptAllTime(id) {
    const userSleep = this.getSleepById(id);
    const totalHrsSlept = userSleep.reduce((total, sleep) => {
      return total + sleep.hoursSlept;
    }, 0);
    return Number((totalHrsSlept / userSleep.length).toFixed(1));
  }

  getUserAvgSleepQualityAllTime(id) {
    const userSleep = this.getSleepById(id);
    const totalSleepQuality = userSleep.reduce((total, sleep) => {
      return total + sleep.sleepQuality;
    }, 0);
    return Number((totalSleepQuality / userSleep.length).toFixed(1));
  }

  getUserSleepHrsByDate(id, date) {
    const userSleep = this.getSleepById(id);
    const sleepHoursByDate = userSleep.find(sleep => sleep.date === date);
    return sleepHoursByDate.hoursSlept;
  }

  getUserSleepQualityByDate(id, date) {
    const userSleep = this.getSleepById(id);
    const sleepQualityByDate = userSleep.find(sleep => sleep.date === date);
    return sleepQualityByDate.sleepQuality;
  }

  getSleepDataByWeek(id, date) {
    const userSleep = this.getSleepById(id);
    const sleepDates = userSleep.map(sleep => sleep.date);
    const indexOfDate = sleepDates.indexOf(date);
    return userSleep.slice(indexOfDate - 6, indexOfDate + 1);
  }

  getAllUsersAvgSleepQualityAllTime() {
    const totalQuality = this.allSleep.reduce((total, sleep) => {
      return total + sleep.sleepQuality;
    }, 0);
    return Number((totalQuality / this.allSleep.length).toFixed(1));
  }

  // Find all users who average a sleep quality greater than 3 for a given week
  // (7 days) - you should be able to calculate this for any week,
  // not just the latest week
  // getSleepQualityOver3(date) {
  // input: array of all sleep objects
  // output: array of ids of users who had sleep quality avg > 3
  // for a given week
  // 1. get this.allSleep for week
  // const sleepDates = this.allSleep.map(sleep => sleep.date);
  //   console.log("sleepDates", sleepDates)
  // const indexOfMatchingSleepDate = sleepDates.indexOf(date);
  //   console.log("indexOfMatchingSleepDate", indexOfMatchingSleepDate)
  // const week = this.allSleep.slice(indexOfMatchingSleepDate - 6,
  // indexOfMatchingSleepDate + 1);
  //   console.log("week", week)
  // 2.
  // }

  getSleptMostOnDate(date) {
    const ids = [];
    const sleepByDate = this.allSleep.filter(sleep => sleep.date === date);
    const hoursSleptOnDate = sleepByDate.map(sleep => sleep.hoursSlept);
    sleepByDate.forEach(sleep => {
      if (sleep.hoursSlept === Math.max(...hoursSleptOnDate)) {
        ids.push(sleep.userID);
      }
    });
    return ids;
  }

}

if (typeof module !== 'undefined') {
  module.exports = SleepRepo;
}
