class Hydration {
  constructor(userHydrationInfo) {
    this.userHydrationInfo = userHydrationInfo;
    this.averageOuncesConsumed;
  }

  getAverageOuncesPerDayAllTime() {
    let totalOunces = this.userHydrationInfo.reduce((ounces, hydrationObj) => {
      ounces += hydrationObj.numOunces
      return ounces
    }, 0)
    this.averageOuncesConsumed = Math.floor(totalOunces / this.userHydrationInfo.length.toFixed(2));
      return this.averageOuncesConsumed;
  };

  getOuncesByDate(date) {
    let ouncesPerDay = this.userHydrationInfo.find(hydrationObj => hydrationObj.date === date );
      return ouncesPerDay.numOunces;
  };

  getOuncesByWeek() {
    let ouncesPerWeekPerDay = this.userHydrationInfo.map(hydrationObj => {
      return hydrationObj.numOunces
    });
    return ouncesPerWeekPerDay;
  };

}

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}