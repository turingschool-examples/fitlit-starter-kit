class HydrationRepository {
  constructor(hydrationData) {
    this.hydrationData = hydrationData;
  }

  getUserConsumptionAvg(id) {
    // TODO decide how to filter to currentUser
    // TODO refactor this method so it reads easier
    return this.hydrationData.reduce(
      (total, { numOunces }, _, { length }) =>
        Math.round((total += numOunces / length) * 100) / 100,
      0
    );
  }

  getUserConsumptionByDate(date) {}

  getUserConsumptionByWeek(currentDate) {}
}

if (typeof module !== "undefined") {
  module.exports = HydrationRepository;
}
