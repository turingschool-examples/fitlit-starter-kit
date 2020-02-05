class SleepRepository {
  constructor(sleepData) {
  this.sleepData = sleepData;
  this.userInfo;
  }

  getUserById(id) {
    this.userInfo = this.sleepData.filter(user => user.userID === id);
   return this.userInfo;
  }

  getAllAvgSleepQuality() {
    let avgSleepQuality = this.sleepData.reduce((sleepScore, user) => {
      sleepScore += user.sleepQuality / this.sleepData.length
      return sleepScore
    }, 0)
    return Number(avgSleepQuality.toFixed(2))
  }

  getSleepQualityAvgAboveThree() {

  }

  getHighestDailySleepHours() {

  }

  getLowestDailySleepHours() {

  }


}

if (typeof module !== 'undefined') {
  module.exports = SleepRepository;
}
