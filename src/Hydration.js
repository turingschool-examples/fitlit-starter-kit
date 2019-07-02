class Hydration {
  constructor(hydrationData) {
    this.hydrationData = hydrationData;
  }
  calculateAverageDailyHydration(id){
    let specificUserIntake = this.hydrationData.filter(function(object){
     return object.userID === id
    })
    let userHydrationData = specificUserIntake.map(function(object){
      return object.numOunces
    })
    let totalHydrationOunces = userHydrationData.reduce(function(acc, curVal){
      return acc = acc + curVal
    }, 0);
    let averageWaterIntake = totalHydrationOunces / userHydrationData.length
    return averageWaterIntake
  }

}

module.exports = Hydration;