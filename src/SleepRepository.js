class SleepRepo {
  constructor(sleepData) {
    this.sleepData = sleepData;
  }

  getSleepById(id) {
    return this.sleepData.filter(sleep => sleep.userID === id);
  }

  calculateAvgSleepStatPerDay(id, stat) {
    let userSleepData = this.getSleepById(id);
    let totalStatSum = userSleepData.reduce((sum, sleep) => {
      sum += sleep[stat];
      return sum;
    }, 0);
    let roundedStatNum = parseInt((totalStatSum / userSleepData.length).toFixed(1));
    return roundedStatNum;
  }

  getSleepStatByDate(id, date, stat) {
    let userSleepData = this.getSleepById(id);
    let hoursByDate = userSleepData.find(sleep => sleep.date === date);
    return hoursByDate[stat];
  }

  getSleepStatsByWeek(id, date, stat) {
    let userSleepData = this.getSleepById(id);
    let sleepDates = userSleepData.map(sleep => sleep.date);
    let indexOfDate = sleepDates.indexOf(date);
    let sleepByDate = userSleepData.slice(indexOfDate, indexOfDate + 7);
    return sleepByDate.reduce((obj, sleep) => {
      obj[sleep.date] = sleep[stat];
      return obj;
    }, {});
  }
}

export default SleepRepo;
