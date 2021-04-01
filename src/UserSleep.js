class UserSleep {
  constructor(id, allSleepData) {
    this.id = id;
    this.sleepData = allSleepData.filter(dataPoint => dataPoint.userID === this.id);
  }
  calculateAvgHoursSlept() {
    const totalHoursSlept = this.sleepData.reduce((total, num) => {
      return total + num.hoursSlept
    }, 0)
    const avgHoursSlept = totalHoursSlept / this.sleepData.length
    return avgHoursSlept
  }
  

}


if (typeof module !== 'undefined') {
  module.exports = UserSleep;
}
