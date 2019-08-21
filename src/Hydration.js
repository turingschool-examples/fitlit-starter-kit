const userData = require('../data-subsets/users-subset')
const hydrationData = require('../data-subsets/hydration-subset');

class Hydration {
  constructor(userData) {
    this.userData = userData;
    this.id = userData.id;
    this.name = userData.name;
    this.hydrationFiltered = this.filterHydrationData();
    this.ouncesPerDay = this.filterToOunces();
  }

  filterHydrationData() {
    return hydrationData.filter(hydObj => hydObj.userID === this.id)
  }

  filterToOunces() {
    return this.hydrationFiltered.map(day => day.numOunces);
  }

  findAvgWaterCons() {
    const oz = this.ouncesPerDay.reduce((totalOunces, day) => {
      totalOunces += day;
      return totalOunces;
    }, 0) / this.ouncesPerDay.length;
    return Math.floor(oz);
  }

}



  

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}