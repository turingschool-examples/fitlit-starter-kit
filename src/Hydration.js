class Hydration {
  constructor(userData) {
    this.userData = userData;
    this.weeklyArr;
  }

  userTotalAvgOz() {
    const total =  this.userData.reduce((acc, user) => acc += user.numOunces, 0);
    return Math.round(total/this.userData.length)
  }

  userHydrationByDate(date) {
    return this.userData.find(day => day.date === date).numOunces;
  }

  getHydroArray(dateToday) {
    const index = (this.userData.findIndex(day => dateToday === day.date));
    this.weeklyArr = this.userData.slice((index - 6), (index + 1)).reverse();
    return this.weeklyArr;
  }
  
  getWeeklyHydroAvg() {
    const weekTotal = this.weeklyArr.reduce((total, day) => {
      total += day.numOunces;
      return total
    }, 0)
    return Math.round(weekTotal/this.weeklyArr.length)
  }
};




if (typeof module !== 'undefined') {
  module.exports = Hydration;
}