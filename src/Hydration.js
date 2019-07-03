class Hydration {
  constructor(userData) {
    this.userData = userData;
    // console.log('class this', this.userData)
  }

  returnUserHydrationAverage() {
    return this.userData.reduce((acc, record) => {
      acc += record.numOunces;
      return acc;
    }, 0) / this.userData.length;
  }
}

module.exports = Hydration;