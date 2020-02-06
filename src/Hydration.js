class Hydration {
  constructor(id) {
    this.userID = id;
    this.date;
    this.numOunces;
  }

  calculateAverageFluidIntakeForUser(hydrationDatas) {
    let userOunceIntakes= [];
    let test = hydrationDatas.filter(hydrationData => {
      if(hydrationData.userID === this.userID) {
        userOunceIntakes.push(hydrationData.numOunces)
      }
    })
    let totalOunces = userOunceIntakes.reduce((acc, ounce) => {
        acc += ounce;
        return acc;
    }, 0)
    let ounceAverage = Math.trunc(totalOunces / userOunceIntakes.length);

    return ounceAverage;
  }

  calculateFluidIntakeForDay() {
  }

  calculateTotalIntakeForWeek() {
  }

}

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}
