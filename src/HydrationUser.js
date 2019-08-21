// const HydrationRepository = require('./HydrationRepository')

class HydrationUser {
  constructor(hydrationTestData) {
    this.hydrationTestData = hydrationTestData;
  }

  findDailyHydration(date, id) {
    let day = this.hydrationTestData.find(user => user.date === date && id)
    return day.numOunces
  }

  findWeeklyHydration(id) {
    let userHydroData = this.hydrationTestData.filter(element => element.userID === id);
    let weeklyData = userHydroData.slice((userHydroData.length - 7), userHydroData.length)
    console.log(weeklyData)
   return weeklyData.map((element) => {
      return element.numOunces
  })
  }

}





if (typeof module !== 'undefined') {
  module.exports = HydrationUser;
}



