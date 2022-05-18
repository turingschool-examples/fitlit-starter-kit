class HydrationRepository {
  constructor(hydrationData) {
    this.hydrationData = hydrationData;
  }

  getUserById(id) {
    const foundData = this.hydrationData.filter(data => data.userID === id);
      return foundData;
  }

  getAvgFluidOunces() {
    const allHydrationDataById = this.getUserById(id);
    const totalFluidOunces = allHydrationDataById.reduce((totalOunces, hydroObj) => {
      totalOunces += hydroObj.numOunces;
      return totalOunces;
    }, 0)
    return totalFluidOunces / allHydrationDataById.length;
  }
}


export default HydrationRepository;
