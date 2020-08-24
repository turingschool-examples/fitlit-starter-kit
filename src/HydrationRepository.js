class HydrationRepository {
  constructor() {
    this.userHydration;
  }
  userHydrationData(hydrationData, id) {
    this.userHydration = hydrationData.filter(dailyHydration => dailyHydration.userID === id);
    return this.userHydration;
  }
  averageAllTimeOunces() {
    let allTimeOunces = this.userHydration.reduce((ounces, day) =>{
      ounces += day.numOunces;
      return ounces 
    }, 0)
    return Math.round(allTimeOunces / this.userHydration.length);
  }
//   dailyHydration(hydrationData, id) {
//     this.userHydration = hydrationData.filter(dailyHydration => dailyHydration.userID === id);
// }
}
if (typeof module !== 'undefined') {
  module.exports = HydrationRepository;
}
  