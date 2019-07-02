class SleepRepository {
  constructor (sleepData) {
    this.sleepData = sleepData
  }

  returnAverageSleep(id) {
    const found = this.sleepData.filter(el => el.userID === id)
      return found.reduce((acc, total) => acc + total.hoursSlept, 0) / found.length
  }

  returnAverageSleepForAllUsers() {
    return Math.round(10 * this.sleepData.reduce((acc, total) => acc + total.sleepQuality, 0) / this.sleepData.length) / 10
  }



}

module.exports = SleepRepository
