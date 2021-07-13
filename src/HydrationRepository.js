class HydrationRepo {
  constructor(hydrationData) {
    this.hydrationData = hydrationData;
  }

  getHydrationById(id) {
    return this.hydrationData.filter(hydration => hydration.userID === id)
  }

  calculateAvgOuncesPerDay(id) {
    let userHydrationData = this.getHydrationById(id);
    let totalUserOunces = userHydrationData.reduce((sum, hydration) => {
      sum += hydration.numOunces;
      return sum;
    }, 0);
    let roundedOunces = Math.round(totalUserOunces / userHydrationData.length);
    return roundedOunces;
  }

  getOuncesByDate(id, date) {
    let userHydrationData = this.getHydrationById(id);
    let ouncesByDate = userHydrationData.find(hydration => hydration.date === date);
    return ouncesByDate.numOunces;
  }

  getOuncesByWeek(id, date) {
    let userHydrationData = this.getHydrationById(id);
    let hydrationDates = userHydrationData.map(hydration => hydration.date);
    let indexOfDate = hydrationDates.indexOf(date);
    let hydrationByDate = userHydrationData.slice(indexOfDate, indexOfDate + 7);
    return hydrationByDate.reduce((obj, hydration) => {
      obj[hydration.date] = hydration.numOunces;
      return obj;
    }, {});
  }
}

export default HydrationRepo;
