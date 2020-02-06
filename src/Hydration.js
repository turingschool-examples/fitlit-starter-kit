class Hydration {
  constructor(hydrationData) {
    this.userID = hydrationData.userID;
    this.date = hydrationData.date;
    this.numOunces = hydrationData.numOunces;
  }

  // fluidConsumedByDate(date) {
  //   if(this.date === date) {
  //     return this.numOunces;
  //   }
  // }

//   fluidConsumededWeekly (date) {
//     console.log()
//   }
}

if(typeof module !== 'undefined') {
  module.exports = Hydration;
};
