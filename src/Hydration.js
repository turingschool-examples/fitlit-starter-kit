class HydrationRepo {
  constructor(hydroData) {
    this.hydroData = hydroData;
  }
  findUserAvgDailyHydration(userID) {
    const singleUserEntries = this.hydroData.filter(userEntry => {
        return userID === userEntry.userID
    });
    const singleUserHydrationData = singleUserEntries.map(userData => {
      return userData.numOunces
    });
    const totalSingleUserHydrationData = singleUserHydrationData.reduce((sum, num) => {
      sum += num;
      return sum
    }, 0);
    const avgUserHydrationData = totalSingleUserHydrationData / singleUserHydrationData.length
    return avgUserHydrationData
  }
}









if (typeof module !== 'undefined') {
  module.exports = HydrationRepo;
}
