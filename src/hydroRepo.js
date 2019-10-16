class HydroRepo {
  constructor(hydrationData) {
    this.hydrationData = hydrationData;
  }

  getUserHydroData(id) {
    return this.hydrationData.filter(data => data.userID === id);
  } 
}


if (typeof module !== 'undefined') {
  module.exports = HydroRepo;
}