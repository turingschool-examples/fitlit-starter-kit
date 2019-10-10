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
    console.log(this.hydrationData);
    let userDateData = this.hydrationData.find(hydroData => {
      return hydroData.date === date;
    });
    return userDateData.numOunces;
  }

  getDailyOzPerWeek() {
   let week = this.hydrationData.slice(-7);
   return week.map(day => day.numOunces);
  }
}


if (typeof module !== 'undefined') {
  module.exports = HydroUser;
}