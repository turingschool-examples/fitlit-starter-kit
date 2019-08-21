class Hydration {
  constructor(userData) {
    this.userData = userData;
    this.newUserData = [...userData];
    this.weeklyHydroArr;
  }

  userTotalAvgOz() {
    const total =  this.userData.reduce((acc, user) => acc += user.numOunces, 0);
    return Math.round(total/this.userData.length)
  }

  userHydrationByDate(date) {
    return this.userData.find(day => day.date === date).numOunces;
  }

  getHydroArray(dateToday) {
  const arrayOfDates = this.userData.map(day => day.date)
    const index = (((arrayOfDates.length - arrayOfDates.findIndex(date => dateToday === date)) * -1) - 6)
    this.weeklyHydroArr = this.newUserData.splice(index, 7).reverse();
    return this.weeklyHydroArr;
  }
  
  getWeeklyHydroAvg() {
    const weekTotal = this.weeklyHydroArr.reduce((total, day) => {
      total += day.numOunces;
      return total
    }, 0)
    return Math.round(weekTotal/this.weeklyHydroArr.length)
  }
};


if (typeof module !== 'undefined') {
  module.exports = Hydration;
}