class Hydration {
  constructor(hydrationData) {
    this.hydrationData = hydrationData;
  }

  calculateAverageFluidsConsumed(userID) {
   let currentUser = this.hydrationData.filter(data => data.userID === userID);
   let sum =  currentUser.reduce((acc, fluids) => {
      return acc += fluids.numOunces;
    }, 0) 
    return sum / currentUser.length;
  }

  getFluidConsumedDay(userID, date) {
    let currentUser = this.hydrationData.filter(data => data.userID === userID);
    return currentUser.find(fluids => fluids.date === date).numOunces;
  }
 
  getPrevDaysHydration(userID) {
    let currentUser = this.hydrationData.filter(data => data.userID === userID);
    let lastWeek = currentUser.slice(-7);
      return lastWeek.map(day => day.numOunces)
   }
}

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}