class Sleep {
  constructor(sleepData, id) {
    this.userSleepData = sleepData;
    this.id = id;
    this.userSleep = this.buildUserSleepData();
    console.log(this.userSleep)
  }

  buildUserSleepData() {
    // console.log(this.data, "1")
    return this.userSleepData.filter(user => user.userID === this.id);
  }

  calculateAverageHoursSlept() {
    let totalSleep = this.userSleepData.reduce((sleepTotal, currentUser) => {
      sleepTotal += currentUser.hoursSlept;
      return sleepTotal
    }, 0)
    return Math.floor(totalSleep / this.userSleepData.length);
  }

}

if (typeof module !== 'undefined') {
  module.exports = Sleep;
}