class Hydration {
  constructor(hydrationData, user) {
    // if(hydrationData && user)
    this.hydrationData = hydrationData;
    this.currentUser = user || {id: 0, name: 'no user'};
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

  getWeekOfHydroData(date) {
    let hydro = []
    const userHydroData = this.getUserHydrationData()
    const todaysH2O = userHydroData.find(hydration => hydration.date === date)
    const startIndex = userHydroData.indexOf(todaysH2O)
    for (let i = 0; i < 8; i++) {
      hydro.push(userHydroData[startIndex - i])
    }
    return hydro
  }

  getWeekofFluidOz() {
    let userHydroData = this.getUserHydrationData()
    let oz = []
    userHydroData.forEach((day) => {
      oz.push(day.numOunces)
    })
    return oz
  }
}

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}
