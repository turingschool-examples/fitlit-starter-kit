class Hydration {
  constructor(id) {
    this.userID = id;
    this.date;
    this.numOunces;
  }

  calculateAverageFluidIntakeForUser(hydrationDatas) {
    let userOunceIntakes = [];

    hydrationDatas.filter(hydrationData => {
      if(hydrationData.userID === this.userID) {
        userOunceIntakes.push(hydrationData.numOunces)
      }
    })
    
    let totalOunces = userOunceIntakes.reduce((acc, ounce) => {
        acc += ounce;
        return acc;
    }, 0)

    return Math.trunc(totalOunces / userOunceIntakes.length);
  }

  calculateFluidIntakeForDay() {
  }

  calculateTotalIntakeForWeek() {
  }

}

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}
