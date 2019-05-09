let hydrData = {}
let hydrUser = {}
if (typeof module !== 'undefined') {
  hydrUser = require('../data/users-test-data')
  hydrData = require('../data/hydration-test-data')
} else {
  hydrUser = userData;
  hydrData = hydrationData;
}
class Hydration {
  constructor(index) {
    this.userID = hydrUser[index].id;
    this.usersHydrationData = (this.findHydrationData());
  }

  findHydrationData() {
    return hydrData.find(ele => ele.userID === this.userID)
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