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
}

export default HydrationRepo;
