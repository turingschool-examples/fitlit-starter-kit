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
}









if (typeof module !== 'undefined') {
  module.exports = HydrationRepo;
}
