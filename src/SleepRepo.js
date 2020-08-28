class SleepRepo {
  constructor(sleepData) {
    this.sleepData = sleepData
  }

  findDataByID(userID) {
    const entries = this.sleepData.filter(userEntry => {
      return userID === userEntry.userID
    });
    return entries
  }

  calculateAvgSleep(userID) {
    const entries = this.findDataByID(userID);
    const totalSleep = entries.reduce((total, data) => {
      total += data.hoursSlept
      return total
    }, 0)
    return totalSleep / entries.length
  }

  findNightlySleep(userID, date) {
    const entries = this.findDataByID(userID)
    const singleNightSleep = entries.find(userEntry => {
      return date === userEntry.date
    })
    return singleNightSleep.hoursSlept
  }


}






if (typeof module !== 'undefined') {
  module.exports = SleepRepo;
}
