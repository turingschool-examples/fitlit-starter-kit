class Hydration {
  constructor(hydrationData, user) {
    // if(hydrationData && user)
    this.hydrationData = hydrationData;
    this.currentUser = user;
  }

  getUserHydrationData() {
    return this.hydrationData.filter(hydration => hydration.userID === this.currentUser.id)
  }

  getAverageDailyOunces() {
    let userHydroData = this.getUserHydrationData()
    let userAverage = userHydroData.reduce((acc, userData) => {
      acc += userData.numOunces
      return acc
    }, 0)
    return Math.round(userAverage / userHydroData.length)
  }

  getOuncesForSpecificDay(date) {
    let userHydroData = this.getUserHydrationData()
    if (date) {
    let todaysH2O = userHydroData.find(hydration => hydration.date === date)
    return todaysH2O.numOunces
  } else {
    return undefined
  }
  }

  getWeekOfFluidOunces(date) {
    let userHydroData = this.getUserHydrationData()
    let todaysH2O = userHydroData.find(hydration => hydration.date === date)
    let startIndex = userHydroData.indexOf(todaysH2O)
    for (var i = 0; i < 7; i++) {
      return (userHydroData[startIndex + i])
    }
  }
}

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}
