class HydrationRepo {
  constructor(hydrationData) {
    this.hydrationData = hydrationData;
  }

  getHydrationById(id) {
    return this.hydrationData.filter(hydration => hydration.userID === id)

  }

  calculateAvgOuncesPerDay(id) {

  }
}

export default HydrationRepo;
