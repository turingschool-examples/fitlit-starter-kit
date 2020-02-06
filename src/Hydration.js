class Hydration {
  constructor(hydrationData, userID) {
    this.hydrationData = hydrationData;
    this.userID = this.userID;
  }

  fluidConsumedByDate(date) {
    const fluid = this.hydrationData.find(data => {
       return data.date === date;
    })
     return fluid.numOunces;
  }

  // fluidConsumededWeekly (date) {
  //
  // }

  fluidConsumedALlTime(id){
    return this.hydrationData.reduce((acc, all) => {
      if(all.userID === id) {
        acc += all.numOunces;
      }
    return acc
    }, 0)
  }
}

if(typeof module !== 'undefined') {
  module.exports = Hydration;
};
