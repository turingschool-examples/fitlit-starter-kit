class HydrationRepository {
  constructor(hydrationData) {
    this.hydrationData = hydrationData;
  }

  getUserById(id) {
    const foundData = this.hydrationData.filter(data => data.userID === id);
      return foundData;
  }

  getAvgFluidOuncesById(id) {
    const allHydrationDataById = this.getUserById(id);
    const totalFluidOunces = allHydrationDataById.reduce((totalOunces, hydroObj) => {
      totalOunces += hydroObj.numOunces;
      return totalOunces;
    }, 0)
    return Math.round(totalFluidOunces / allHydrationDataById.length);
  }

  getFluidOuncesByDate(id, date) {
    const allHydrationDataById = this.getUserById(id);
    const hydrationByDate = allHydrationDataById
      .filter(hydroObj => hydroObj.date === date)
      .reduce((totalOunces, hydroObj) => {
        totalOunces += hydroObj.numOunces;
        return totalOunces;
      }, 0)
      return Math.round(hydrationByDate);
  }
}


export default HydrationRepository;
