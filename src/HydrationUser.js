class HydrationUser {
  constructor(hydrationTestData) {
    this.hydrationTestData = hydrationTestData;
  }

  findDailyHydration(date, id) {
    var day = this.hydrationTestData.find(user => user.date === date && id)
  console.log(day)
  }
}



if (typeof module !== 'undefined') {
  module.exports = HydrationUser;
}