class Hydration {
  constructor(userData) {
    this.userData = userData;
  }

  userTotalAvgOz() {
    const total =  this.userData.reduce((acc, user) => acc += user.numOunces, 0);
    return Math.round(total/this.userData.length)
  }

  userAvgByDate(date) {
    return this.userData.find(day => day.date === date).numOunces;
  }
};



if (typeof module !== 'undefined') {
  module.exports = Hydration;
}