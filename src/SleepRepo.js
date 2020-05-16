class SleepRepo {
  constructor(sleepData) {
    this.sleepData = sleepData
    this.dataByUser = this.getDataByUser()
  }

  calculateAverageSleep() {
    let avg = this.sleepData.reduce((acc, sleep) => {
      return acc += sleep.sleepQuality / this.sleepData.length
    }, 0)
    return Number(avg.toFixed(1))
  }

  getDataByUser() {
    return this.sleepData.reduce((acc, sleep) => {
      if (!acc[sleep.userID]) {
        acc[sleep.userID] = []
      }
      acc[sleep.userID].push(sleep)
      return acc
    }, {})
  }

  getAllQualitySleepers(date) {
    let userIDs = Object.keys(this.dataByUser)
    return userIDs.reduce((acc, user) => {
      let sleepDate = this.dataByUser[user].find(sleep => sleep.date === date)
      let firstDate = this.dataByUser[user].indexOf(sleepDate)
      let sleepQuals = this.dataByUser[user].slice(firstDate, firstDate + 7).map(sleep => sleep.sleepQuality)     
      let avg = sleepQuals.reduce((acc, num) => {
        return acc += num / sleepQuals.length
      }, 0)
      if(avg > 3) {
        acc.push(Number(user))
      }
      return acc
    }, [])
  }


  //CAN REFACTOR FOLLOWING TWO FNS INTO 1
  getLongestSleepers(date) {
    let sleepEntries = this.sleepData
      .filter(sleep => sleep.date === date)
      .sort((a, b) => b.hoursSlept - a.hoursSlept)
    let longestSleepers = []
    sleepEntries.forEach(sleep => {
      if (sleep.hoursSlept === sleepEntries[0].hoursSlept) {
        longestSleepers.push(sleep)
      }
    })
    return longestSleepers
  }

  getHighestQualitySleepers(date) {
    let sleepEntries = this.sleepData
      .filter(sleep => sleep.date === date)
      .sort((a, b) => b.sleepQuality - a.sleepQuality)
    let longestSleepers = []
    sleepEntries.forEach(sleep => {
      if (sleep.sleepQuality === sleepEntries[0].sleepQuality) {
        longestSleepers.push(sleep)
      }
    })
    return longestSleepers
  }
}

if (typeof module !== 'undefined') {
  module.exports = SleepRepo;
}
