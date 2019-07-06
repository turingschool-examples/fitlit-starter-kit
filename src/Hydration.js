class Hydration {
  constructor(hydrationData) {
    this.hydrationData = hydrationData;
  }

  findIdHelper(id) {
    let specificUserIntake = this.hydrationData.filter(function(object) {
      return object.userID === id
    })
    return specificUserIntake;
  }

  calculateAverageDailyHydration(id) {
    let userHydrationData = this.findIdHelper(id).map(function(object) {
      return object.numOunces
    })
    let totalHydrationOunces = userHydrationData.reduce(function(acc, curVal) {
      return acc = acc + curVal
    }, 0);
    let averageWaterIntake = totalHydrationOunces / userHydrationData.length
    return averageWaterIntake
  }

  displayFluidOuncesPerDay(id, date) {
    let dateOfUserIntake = this.findIdHelper(id).find(function(obj) {
      return obj.date === date
    });
    return dateOfUserIntake.numOunces;
  }

  displayWeeklyFluidOunce(id) {
    let user = this.findIdHelper(id)
    let userWeeklyFluidOunces = user.map(function(obj) {
      return obj.numOunces;
    });
    if (userWeeklyFluidOunces.length > 7) {
      userWeeklyFluidOunces.length = 7;
    }
    return userWeeklyFluidOunces;
  }
}

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}