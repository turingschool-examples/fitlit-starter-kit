// import datePicker from 'date-picker-pkg'

class Hydration {
  constructor(hydrationData, id) {
    this.data = hydrationData;
    this.id = id;
    this.user = this.buildUserHydrationData();
  }

  buildUserHydrationData() {
    return this.data.filter(user => user.userID === this.id);
  }

  calculateAverageOunces() {
    let totalOz = this.user.reduce((ozTotal, currentUser) => {
      ozTotal += currentUser.numOunces;
      return ozTotal
    }, 0)
    return Math.floor(totalOz / this.user.length);
  }

  calculateDailyOunces(date) {
    let daySelected = this.user.find(day => day.date === date);
    return daySelected.numOunces;
  }

  calculateWeeklyOz(date) {
    let indexOfCurrentDay = this.user.findIndex(day => day.date === date);
    return this.user.slice(indexOfCurrentDay - 6, indexOfCurrentDay + 1)
  }
}





  if (typeof module !== 'undefined') {
  module.exports = Hydration;
}