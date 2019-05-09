if (typeof module !== 'undefined') {
  var users = require('../data/users-test-data')
  var hydrateData = require('../data/hydration-test-data')
} else {
  var users = userData
  var hydrateData = hydrationData
}
class Hydration {
  constructor(index) {
    this.userObj = users[index];
  }

  findHydrationData() {
    return hydrateData.find(ele => ele.userID === this.userObj.id)
  }

  averageOuncesPerDay() {
    let ounces = this.findHydrationData().hydrationData
    let average = ounces.map(ele => ele.numOunces).reduce((acc, value) => {
      acc += value / ounces.length
      return acc
    }, 0)
    return Math.floor(average)
  }

  amountHydratedByDay(day) {
    let userOunce = this.findHydrationData().hydrationData;
    return userOunce.filter(ounces => ounces.date === day).map(oz => oz.numOunces).shift()
  }

  waterForWeek(startDate) {
    let week = this.findHydrationData().hydrationData;
    let firstDayIndex = week.findIndex(ele => ele.date === startDate) 
    return week.splice(firstDayIndex, 7)
  }

}

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}