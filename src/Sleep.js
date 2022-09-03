class Sleep {
  constructor(sleepData) {
    this.sleepData = sleepData;
  }

  findUserDataID = (id) => this.sleepData.filter(userSleepData => userSleepData.userID === id);

  getAvgHrsSleptPerDay(id) { // get user's average hours slept over all time
    let userSleep = this.findUserDataID(id);
    const totalHours = userSleep.reduce((avg, hour) => {
       avg += hour.hoursSlept;
       return avg;
    }, 0);

    return (totalHours / this.sleepData.length).toFixed(1);
  };

  getAvgSleepQualPerDay(id) { // average sleep quality (over all time)
    let userSleepQuality = this.findUserDataID(id);
    const totalQualityHours = userSleepQuality.reduce((avg, sleepQual) => {
      console.log(avg);
      avg += sleepQual.sleepQuality;
      return avg;
    }, 0);
    return (totalQualityHours / this.sleepData.length).toFixed(1);
  };

  getHrsSleptByDate(id) {
    let userSleepID = this.findUserDataID(id);
    const sleepHoursByDate = userSleepID.map((userDate) => userDate.date).pop();
    const todaySleep = userSleepID.find((sleepObj) => sleepObj.date === sleepHoursByDate)
    return todaySleep.hoursSlept;
  }

  getSleepQualByDate(id) {
    let userSleepQual = this.findUserDataID(id);
    const sleepQualByDate = userSleepQual.map((userDate) => userDate.date).pop();
    const todayQualSleep = userSleepQual.find((sleepObj) => sleepObj.date === sleepQualByDate)
    return todayQualSleep.sleepQuality;
  }

  getHrsSleptPerWeek(id, date) {
    let userSleepData = this.findUserDataID(id);
    const userSleepDates = userSleepData.map(userSleep => userSleep.date);
    const userIndexOfDate = userSleepDates.indexOf(date);
    const userSevenDays = userSleepData.slice(userIndexOfDate -6, userIndexOfDate +1)
    const usersAvgSleep = userSevenDays.reduce((avgSleep, userSleep) => {
      avgSleep += userSleep.hoursSlept;
      return avgSleep;
    }, 0)
    return usersAvgSleep.toFixed(1);
  }

  getSleepQualPerWeek(id, date) {
    let userSleepQualData = this.findUserDataID(id);
    const userSleepDates = userSleepQualData.map(userSleep => userSleep.date);
    const userIndexOfDate = userSleepDates.indexOf(date);
    const userSevenDays = userSleepQualData.slice(userIndexOfDate -6, userIndexOfDate +1)
    const usersAvgSleep = userSevenDays.reduce((avgSleep, userSleep) => {
      avgSleep += userSleep.sleepQuality;
      return avgSleep;
    }, 0)
    return usersAvgSleep.toFixed(1);
  }

  getAllAvgSleepQual() {
    const userSleepQualDetails = this.sleepData.reduce((avg, userSleepQ) => {
      avg += userSleepQ.sleepQuality / this.sleepData.length
      return avg;
    }, 0)
    return userSleepQualDetails.toFixed(1);
  }
}


export default Sleep;
