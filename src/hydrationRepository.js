class HydrationRepository {
  constructor(hydrationData) {
    this.hydrationData = hydrationData;
    this.hydrationUser;
  }

  getUserById(userId) {
    this.hydrationUser = this.hydrationData.filter(user => user.userID === userId);
    return this.hydrationUser;
  }

  // getTotalDailyHydrationAvg() {
  //   let dailyHydration = this.hydrationData.filter(user => user.userID )
  // }

}

if (typeof module !== 'undefined') {
  module.exports = HydrationRepository;
};
