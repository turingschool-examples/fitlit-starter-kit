class Sleep {
  constructor(sleepData, id) {
    this.userSleepData = sleepData;
    this.id = id;
    this.userSleep = this.buildUserSleepData();
  }

  buildUserSleepData() {
    return this.userSleepData.filter(user => user.userID === this.id);
  }

  calculateAverageHoursSlept() {
    let totalSleep = this.userSleep.reduce((sleepTotal, currentUser) => {
      sleepTotal += currentUser.hoursSlept;
      return sleepTotal
    }, 0)
    return (totalSleep / this.userSleep.length).toFixed(2);
  }

  calculateAverageSleepQuality() {
    let totalSleepQuality = this.userSleep.reduce((sleepQualityTotal, currentUser) => {
      sleepQualityTotal += currentUser.sleepQuality;
      return sleepQualityTotal
    }, 0)
    return (totalSleepQuality / this.userSleep.length).toFixed(2);
  }

  calculateHoursSleptByDate(date) {
    let daySelected = this.userSleep.find(user => user.date === date);
    return daySelected.hoursSlept;
  }

  calculateSleepQualityByDate(date) {
    let daySelected = this.userSleep.find(user => user.date === date);
    return daySelected.sleepQuality;
  }


}


if (typeof module !== 'undefined') {
  module.exports = Sleep;
}