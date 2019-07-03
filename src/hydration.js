class Hydration {
  constructor(hydrationData) {
    this.hydrationData = hydrationData;
  }
  averageTotalFluidOzPerUser(id) {
    let allUserFluidDatum = this.hydrationData.filter(user => id === user.userID)
    return allUserFluidDatum.reduce((acc, user) => {
      return parseFloat(((acc += user.numOunces) / allUserFluidDatum.length).toFixed(2))
    }, 0)
  }
  fluidOzsPerDay(id, date) {
    return this.hydrationData.filter(user => id === user.userID).find(item => date === item.date).numOunces;
  }
  userFluidsPerWeek(id, date) {
    let findUserInstances = this.hydrationData.filter(user => id === user.userID)
    let findUserIndex = findUserInstances.findIndex(day => day.date === date)
    let fluidsPerWeek = findUserInstances.slice(-9, findUserIndex + 1)
    return fluidsPerWeek.map(user => user.numOunces)
  }
}

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}