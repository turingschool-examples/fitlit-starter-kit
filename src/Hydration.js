class HydrationRepo {
  constructor(hydroData) {
    this.hydroData = hydroData;
  }
  findUserAvgDailyHydration(userID) {
    const singleUserEntries = this.findDataByID(userID)
    const singleUserTotalOz = singleUserEntries.reduce((singleUserTotal, data) => {
      singleUserTotal += data.numOunces
      return singleUserTotal
    }, 0)
    return singleUserTotalOz / singleUserEntries.length
  }
  findDailyHydration(userID, date) {
    const singleUserEntries = this.findDataByID(userID)
    const singleDayHydration = singleUserEntries.find(userEntry => {
      return date === userEntry.date
    })
    return singleDayHydration.numOunces
  }
  findDataByID(userID) {
    const singleUserEntries = this.hydroData.filter(userEntry => {
      return userID === userEntry.userID
    });
    return singleUserEntries
  }
}









if (typeof module !== 'undefined') {
  module.exports = HydrationRepo;
}
