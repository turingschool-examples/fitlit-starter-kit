Hydration = require('../src/Hydration');

class HydrationRepository {
  constructor(filepathway, userId) {
    this.filepathway = filepathway;
    this.userHydrationData = new Hydration(this.returnHydrationData(userId));
  }

  returnHydrationData(userId) {
    return this.filepathway.find(hydrationObj => hydrationObj.userID == userId);
  }

  aveOuncesEveryDay() {
    return this.userHydrationData.hydrationData.reduce((acc, curr) => {
      acc += curr.numOunces / this.userHydrationData.hydrationData.length;
      return acc;
    }, 0);
  }

  singleDayOunces(specificDate) {
    return this.userHydrationData.hydrationData.find(day => day.date == specificDate).numOunces;
  }

  weekOunces(specificDate) {
    let index = this.userHydrationData.hydrationData.findIndex(day => day.date == specificDate);
    let weekData = this.userHydrationData.hydrationData.slice(index, index + 7);
    return weekData.reduce((acc, curr) => {
      acc += curr.numOunces;
      return acc;
    }, 0);
  }

}

module.exports = HydrationRepository;