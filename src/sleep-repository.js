class SleepRepository {
  constructor (sleepData) {
    this.sleepData = sleepData
  }

  returnAverageSleep(id) {
    const found = this.sleepData.filter(el => el.userID === id)
      return found.reduce((acc, total) => acc + total.hoursSlept, 0) / found.length
  }


}

module.exports = SleepRepository
