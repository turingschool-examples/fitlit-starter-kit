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
    const singleUserEntries = this.hydroData.filter(userEntry => {
      return userID === userEntry.userID
    });
    const singleDayHydration = singleUserEntries.find(day => {
      date === day
      return day
    })
    return singleDayHydration.numOunces
  }
}









if (typeof module !== 'undefined') {
  module.exports = HydrationRepo;
}
