class AllUserSleep {
  constructor(sleepData) {
    this.sleepData = sleepData;
  }
  calcAvgSleepQuality() {
    const totalSleepQuality = this.sleepData.reduce((total, num) => {
      return total + num.sleepQuality
    }, 0)
    const avgSleepQuality = totalSleepQuality / this.sleepData.length
    return avgSleepQuality
  }

  calcAboveAvgSleepQuality(date) {
    //determine specific weeks
    //calculate average sleep quality for each user (create instances of users?)
    //return users who have a sleep quality > 3
  }

  calcMostSleep(date) {
    //take in date, look for highest number of hours slept, return user(s)

  }
}


if (typeof module !== 'undefined') {
  module.exports = AllUserSleep;
}
