class HydroUser {
  constructor(userHydroData){
    this.hydrationData = userHydroData;
  }

  calcAvgTotalOz() {
   let sum = this.hydrationData.reduce((acc, data) => {
      acc += data.numOunces;
      return acc;
   },0)
   return Math.round(sum / this.hydrationData.length)
  }
}


if (typeof module !== 'undefined') {
  module.exports = HydroUser;
}