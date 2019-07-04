class Hydration {
  constructor(userData) {
    this.userData = userData;
  }

  returnUserHydrationAverage() {
    return this.userData.reduce((acc, record) => {
      acc += record.numOunces;
      return acc;
    }, 0) / this.userData.length;
  }

  returnOuncesGivenDate(date) {
    return this.userData.find(record => record.date === date).numOunces;
  }

  returnOuncesGivenDateWeek(date) {
    let daySeven = this.userData.findIndex(record => record.date === date);
    let dayOne = daySeven - 6;
  
    return this.userData.reduce((acc, record, index) => {
      if (index <= daySeven && index >= dayOne) {
      acc.push({['x']:record.date, ['y']: record.numOunces});
      }
      return acc;
    }, []);
  }
}

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}
