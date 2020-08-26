class HydrationRepo {
  constructor(hydroData) {
    this.hydroData = hydroData;
  }

  findDataByID(userID) {
    const singleUserEntries = this.hydroData.filter(userEntry => {
      return userID === userEntry.userID
    });
    return singleUserEntries
  }

  findDailyHydration(userID, date) {
    const singleUserEntries = this.findDataByID(userID)
    const singleDayHydration = singleUserEntries.find(userEntry => {
      return date === userEntry.date
    })
    return singleDayHydration.numOunces
  }

  findWeeklyHydration(userID, endDate) {
    const singleUserEntries = this.findDataByID(userID)
    const endingIndex = singleUserEntries.map(singleEntry => {
      return singleEntry.date
    }).indexOf(endDate);
    const startingIndex = endingIndex - 5
    return singleUserEntries.splice(startingIndex - 1, endingIndex - 1)
  }

  findUserAvgDailyHydration(userID) {
    const singleUserEntries = this.findDataByID(userID)
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
