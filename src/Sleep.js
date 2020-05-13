class Sleep {
  constructor(sleepData, user) {
    this.sleepData = sleepData;
    this.currentUser = user;
  }

  getUserSleepData() {
    return this.sleepData.filter(sleep => sleep.userID === this.currentUser.id)
  }

  getAverageDailySleep() {
    let userSleepData = this.getUserSleepData()
    let userAverage = userSleepData.reduce((acc, userData) => {
      acc += userData.hoursSlept
      return acc
    }, 0)
    return Math.round(userAverage / userSleepData.length)
  }
}

  if (typeof module !== 'undefined') {
    module.exports = Sleep;
  }