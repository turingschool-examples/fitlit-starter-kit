class HydrationRepo {
  constructor(hydroData) {
    this.hydroData = hydroData;
  }

  findDataByID(userID) {
    const entries = this.hydroData.filter(userEntry => {
      return userID === userEntry.userID
    });
    return entries
  }

  findDailyHydration(userID, date) {
    const entries = this.findDataByID(userID)
    const singleDayHydration = entries.find(userEntry => {
      return date === userEntry.date
    })
    return singleDayHydration.numOunces
  }

  findWeeklyHydration(userID, endDate) {
    const entries = this.findDataByID(userID)
    const endingIndex = entries.map(singleEntry => {
      return singleEntry.date
    }).indexOf(endDate);
    const startingIndex = endingIndex - 5
    return entries.slice(startingIndex - 1, endingIndex + 1)
  }

  findAvgDailyHydration(userID) {
    const entries = this.findDataByID(userID)
    const totalOz = entries.reduce((total, data) => {
      total += data.numOunces
      return total
    }, 0)
    return totalOz / entries.length
  }
}









if (typeof module !== 'undefined') {
  module.exports = HydrationRepo;
}
