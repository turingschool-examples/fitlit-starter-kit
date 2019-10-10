// const data = require('../data/hydration');
// const hydrationData = data.hydrationData;

// const User = require('../src/User');

class Hydration {
  constructor(hydrationData) {
    this.hydrationData = hydrationData;
    // this.userID = hydrationData.userId;
    // this.date = hydrationData.date;
    // this.numOunces = hydrationData.numOunces;

  }
  getTotalAverageHydration(id) {
    let userDrinks = this.hydrationData.filter((drink) => (drink.userID === id));
    let drinkTotal = userDrinks.reduce((sumSoFar, drink) => (sumSoFar + drink.numOunces), 0);
    return drinkTotal/userDrinks.length;
  }

  getHydrationByDate(id, dateString) {
    let userDrinks = this.hydrationData.filter((drink) => (drink.userID === id));
    return userDrinks.find((drink) => (drink.date === dateString)).numOunces;
  }

}



if (typeof module !== 'undefined') {
  module.exports = Hydration;
};
