class Hydration {
  constructor(hydrationData) {
    this.hydrationData = hydrationData ;

  }

  consumerInfo(id) {
    let userInfo = this.hydrationData.filter(function(obj) {
        return obj.userID === id;
    });
    return userInfo;
  }

  averageFluid(id) {
    let userHydroData = this.consumerInfo(id).map(function(object) {
      return object.numOunces
    });

    let avgHydration = userHydroData.reduce(function(accumulator, ounces) {
      return accumulator + ounces
    }, 0);
    return Math.ceil(avgHydration/userHydroData.length);
  } 

  totalOuncesDaily(day, id) {
    return this.consumerInfo(id).find(obj => obj.date === day).numOunces;
  }

  dailyOuncesPerWeek(id) {
    return this.consumerInfo(id).slice(-7).map(obj => obj.numOunces);
  }
}


if (typeof module !== 'undefined') {
  module.exports = Hydration; 
}
