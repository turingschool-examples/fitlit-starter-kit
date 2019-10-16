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

  getOzByDate(date) {
    let userDateData = this.hydrationData.find(hydroData => {
      return hydroData.date === date;
    });
    return userDateData.numOunces;
  }

  getDailyOzPerWeek() {
    return this.hydrationData.slice(-8);
  }

  calcTotalDrankByWeek(date) {
    let dataDate = this.hydrationData.map(data => data.date);
    let dateIndex = dataDate.lastIndexOf(date);
    let weekData = this.hydrationData.slice(dateIndex - 7, dateIndex + 1);
    return weekData.reduce((acc, day) => {
      acc += day.numOunces;
      return acc;
    },0);
  }
}

if (typeof module !== 'undefined') {
  module.exports = HydroUser;
}
