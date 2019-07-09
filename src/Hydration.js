class Hydration {
  constructor(hydrationData) {
    this.hydrationData = hydrationData;
  }

  findIdHelper(id) {
    let specificUserIntake = this.hydrationData.filter(function(aUser) {
      return aUser.userID === id
    })
    return specificUserIntake;
  }

  calculateAverageDailyHydration(id) {
    let userHydrationData = this.findIdHelper(id).map(function(aUser) {
      return aUser.numOunces
    })
    let totalHydrationOunces = userHydrationData.reduce(function(total, ounces) {
      return total = total + ounces
    }, 0);
    let averageWaterIntake = totalHydrationOunces / userHydrationData.length
    return averageWaterIntake
  }

  displayFluidOuncesPerDay(id, date) {
    let dateOfUserIntake = this.findIdHelper(id).find(function(aUser) {
      return aUser.date === date
    });
    return dateOfUserIntake.numOunces;
  }

  displayWeeklyFluidOunce(id) {
    let user = this.findIdHelper(id)
    let userWeeklyFluidOunces = user.map(function(aUser) {
      return aUser.numOunces;
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