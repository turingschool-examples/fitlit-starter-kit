class HydrationRepository {
  constructor(hydrationData) {
    this.hydrationData = hydrationData;
  }

  returnUserHydrationData(id) {
    return this.hydrationData.filter(el => el.userID === id);
  }

}

if (typeof module !== 'undefined') {
  module.exports = HydrationRepository;
}