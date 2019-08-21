class Hydration {
  constructor(userData) {
    this.userData = userData;
    this.newUserData = [...userData]
  }

  userTotalAvgOz() {
    const total =  this.userData.reduce((acc, user) => acc += user.numOunces, 0);
    return Math.round(total/this.userData.length)
  }

  userAvgByDate(date) {
    return this.userData.find(day => day.date === date).numOunces;
  }

  getHydroArray(dateToday) {
  const arrayOfDates = this.userData.map(day => day.date)
    const index = (((arrayOfDates.length - arrayOfDates.findIndex(date => dateToday === date)) * -1) - 6)
    return this.newUserData.splice(index, 7).reverse();
  }

};


if (typeof module !== 'undefined') {
  module.exports = Hydration;
}