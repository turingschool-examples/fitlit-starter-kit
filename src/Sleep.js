class Sleep {
  constructor(sleepData) {
    this.sleepData = sleepData;
  }

  findUserDataID = (id) => this.sleepData.filter(userSleepData => userSleepData.userID === id);

  getAvgHrsSleptPerDay(id) {
    let userSleep = this.findUserDataID(id);
    const totalHours = this.sleepData.reduce((acc, hour) => {
       return acc += hour.hoursSlept / this.sleepData.length;
    }, 0);
    return parseFloat(totalHours).toFixed(1);
  };

  getAvgSleepQuality(id) {
    let userSleepQuality = this.findUserDataID(id);
    const totalQualityHours = userSleepQuality.reduce((acc, sleepQual) => {
      return acc += sleepQual.sleepQuality / this.sleepData.length;
    }, 0);
    return totalQualityHours.toFixed(1);
  };

  getSleepHrsByDay(id) {
    let userSleepID = this.findUserDataID(id);
    const sleepHoursByDate = userSleepID.map((userDate) => userDate.date).pop();
    const todaySleep = userSleepID.find((sleepObj) => sleepObj.date === sleepHoursByDate)
    return todaySleep.hoursSlept;
  }

  getSleepQualPerDay(id) {
    let userSleepQual = this.findUserDataID(id);
    const sleepQualByDate = userSleepQual.map((userDate) => userDate.date).pop();
    const todayQualSleep = userSleepQual.find((sleepObj) => sleepObj.date === sleepQualByDate)
    return todayQualSleep.sleepQuality;
  }
  getSleepHoursPerWeek(id, date) {
    let userSleepData = this.findUserDataID(id);
    const userSleepDates = userSleepData.map(userSleep => userSleep.date);
    const userIndexOfDate = userSleepDates.indexOf(date);
    const userSevenDays = userSleepData.slice(userIndexOfDate -6, userIndexOfDate +1)
    const usersAvgSleep = userSevenDays.reduce((avgSleep, userSleep) => {
      avgSleep += userSleep.hoursSlept / 7;
      return avgSleep;
    }, 0)
    return usersAvgSleep;
  }

  getSleepQualPerWeek(id, date) {
    let userSleepQualData = this.findUserDataID(id);
    const userSleepDates = userSleepQualData.map(userSleep => userSleep.date);
    const userIndexOfDate = userSleepDates.indexOf(date);
    const userSevenDays = userSleepQualData.slice(userIndexOfDate -6, userIndexOfDate +1)
    const usersAvgSleep = userSevenDays.reduce((avgSleep, userSleep) => {
      avgSleep += userSleep.sleepQuality / 7;
      return avgSleep;
    }, 0)
    return usersAvgSleep.toFixed(1);
  }

  getAvgSleepQual() {
    let userSleepQual = this.sleepData.reduce((avg, userSleepQ) =>{
      avg += userSleepQ.sleepQuality / this.sleepData.length
      return avg;
    }, 0)
    return userSleepQual.toFixed(1);
  }

}


export default Sleep;
