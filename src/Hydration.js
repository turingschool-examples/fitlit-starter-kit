class HydrationRepo {
  constructor(hydroData) {
    this.hydroData = hydroData;
  }
  findUserAvgDailyHydration(userID) {
    const singleUserEntries = this.hydroData.filter(userEntry => {
      return userID === userEntry.userID
    });
    const singleUserTotalOz = singleUserEntries.reduce((singleUserTotal, data) => {
      singleUserTotal += data.numOunces
      return singleUserTotal
    }, 0)
    return singleUserTotalOz / singleUserEntries.length
  }
  findDailyHydration(userID, date) {

    const singleDayHydration = this.hydroData.find(userEntry => {
      return userID === userEntry.userID && date === userEntry.date
    })
    return singleDayHydration.numOunces
  }
  findDataByID(userID) {
    const singleUserEntries = this.hydroData.filter(userEntry => {
      return userID === userEntry.userID
    });
  }
}









if (typeof module !== 'undefined') {
  module.exports = HydrationRepo;
}
