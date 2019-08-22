// const HydrationRepository = require('./HydrationRepository')

class HydrationUser {
  constructor(hydrationTestData) {
    this.hydrationTestData = hydrationTestData;
  }

  findDailyHydration(date, id) {
    let userInfo = this.hydrationTestData.filter(element => element.userID === id)
    let day = userInfo.find(element => element.date === date)

    return day.numOunces
  }

  findWeeklyHydration(id) {
    let userHydroData = this.hydrationTestData.filter(element => element.userID === id);
    let weeklyData = userHydroData.slice((userHydroData.length - 7), userHydroData.length)
   return weeklyData.map((element) => {
      return element.numOunces
  })
  }

}





if (typeof module !== 'undefined') {
  module.exports = HydrationUser;
}



