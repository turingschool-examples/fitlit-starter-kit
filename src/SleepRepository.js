class SleepRepository {
  constructor(sleepData) {
    this.sleepData = sleepData
  }

  calculateAverageUsersSleepQuality() {
    let allSleepQuality = this.sleepData.map(function(obj) {
      return obj.sleepQuality
    })
    let totalSleepQuality = allSleepQuality.reduce(function(total, current) {
      return total = total + current
    }, 0)
    let averageSleepQuality = totalSleepQuality / allSleepQuality.length 
    let roundedAverageSleepQuality = averageSleepQuality.toFixed(1)
    return Number(roundedAverageSleepQuality)
}
}

module.exports = SleepRepository;