class HydrationRepository {
  constructor() {
    this.userHydration;
  }
  userHydrationData(hydrationData, id) {
    this.userHydration = hydrationData.filter(dailyHydration => dailyHydration.userID === id);
    return this.userHydration;
}
// averageAllTimeOunces() {
// }
//   dailyHydration(hydrationData, id) {
//     this.userHydration = hydrationData.filter(dailyHydration => dailyHydration.userID === id);
// }
}
if (typeof module !== 'undefined') {
  module.exports = HydrationRepository;
}
  