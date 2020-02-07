class Hydration {
  constructor(hydrationData, userID) {
    this.hydrationData = hydrationData;
    this.userID = userID;
  }

  fluidConsumedByDate(date) {
    const fluid = this.hydrationData.find(data => {
       return data.date === date;
    })
     return fluid.numOunces;
  }

  fluidConsumededWeekly(id) {
    return this.hydrationData.slice(-7).map(day => day.numOunces);
  }

  fluidConsumedALlTime(id){
     let allTime = this.hydrationData.reduce((acc, all) => {
      if(all.userID === id) {
        acc += all.numOunces;
      }
    return acc
    }, 0)
    return allTime;
  }
}


if (typeof module !== 'undefined') {
  module.exports = Hydration;
};
