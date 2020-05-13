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
    const weeksHydroData = []
    const userHydroData = this.getUserHydrationData()
    const todaysH2O = userHydroData.find(hydration => hydration.date === date)
    const startIndex = userHydroData.indexOf(todaysH2O)
    for (var i = 1; i < 8; i++) {
      weeksHydroData.push(userHydroData[startIndex + i])
    }
    return weeksHydroData
  }
}

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}
