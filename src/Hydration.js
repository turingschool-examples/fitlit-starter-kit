class Hydration {
  constructor(hydrationData) {
    this.hydrationData = hydrationData;
  }

  calculateAverageFluidsConsumed(userID) {
   let averageFluids = this.hydrationData.filter(data => data.userID === userID)
   let sum =  averageFluids.reduce((acc, fluids) => {
      return acc += fluids.numOunces;
    }, 0) 
    return sum / averageFluids.length
  }

  
}

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}