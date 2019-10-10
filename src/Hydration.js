const data = require('../data/hydration');
const hydrationData = data.hydrationData;
// const User = require('../src/User');

class Hydration {
  constructor(hydrationData) {
    this.hydrationData = hydrationData;
  }
  calculateAverageOunces(id) {
    let perDayUserHydration = this.hydrationData.filter((data) => id === data.userID);
    let sumUserHydration = perDayUserHydration.reduce((sumSoFar, data) => {
      return sumSoFar = sumSoFar + data.numOunces;
    }, 0);
    return sumUserHydration/perDayUserHydration.length;
  }
  calculateDailyOunces(id, date) {
    let findOuncesByDate = this.hydrationData.find((data) => id === data.userID && date === data.date);
    return findOuncesByDate.numOunces;
  }
  calculateWeeklyOunces() {

  }
}


if (typeof module !== 'undefined') {
  module.exports = Hydration;
}
