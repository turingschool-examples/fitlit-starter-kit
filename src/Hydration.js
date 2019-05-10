class Hydration {
  constructor(userId, hydrationData) {
    this.id = userId;
    this.hydrationData = hydrationData;

    

    
  }
    // this.currentDate = Date.now();
  getAverageFluidIntake(user) {
    return user.hydrationData.reduce((fluid, dailyIntake) => {
      fluid += dailyIntake.numOunces
      return fluid;
    }, 0) / user.hydrationData.length
    
  }
  getFluidIntakeByDate(user, date) {  
    const dateData = user.hydrationData.find(datum => {
      return datum.date === date
    });
    return dateData.numOunces
  }
  getDailyFluidIntakeByWeek(user, date) {
    let weeklyFluids = [];
    for(let i = 0; i < 7; i++) {
      weeklyFluids.push(user.hydrationData[i].numOunces)
    }
    return weeklyFluids;
  }
}
if(typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = Hydration;
}