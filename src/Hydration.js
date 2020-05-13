class Hydration {
  constructor(id, hydrationData) {
    this.userHydration = this.getUserHydration(id, hydrationData);
  }

  // getUserHydration(id) {
  //   this.userHydration = this.allHydrationData.filter(hydration => {
  //     return hydration.userID === id;
  //   })
  // }

  getUserHydration(id, hydrationData) {
    return hydrationData.filter(hydration => {
      return hydration.userID === id;
    })
  }

  getDailyWater(date) {
    let dailyHydration = this.userHydration.filter(hydration => {
      return hydration.date === date;
    })
    
    return dailyHydration.reduce((acc, hydration) => {
      acc += hydration.numOunces;
      return acc;
    }, 0)
  }

  getWeeklyWater(date) {
    let hydrationDate = this.userHydration.find(hydration => {
      return hydration.date === date
    })

    let firstDate = this.userHydration.indexOf(hydrationDate);
    return this.userHydration
      .slice(firstDate, firstDate+7)
      .map(hydration => hydration.numOunces);
  }

  getAvgWater() {
    let avg = this.userHydration.reduce((acc, hydration) => {
      return acc += hydration.numOunces / this.userHydration.length
    }, 0)

    return Math.ceil(avg);
  }
}

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}
