
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

  calculateWeeklyOz(startDate) {

    let findStartingDate;
    this.user.forEach((day, i) => {
      if (day.date === startDate) {
        findStartingDate = i;
      }
    });

    let day7 = this.user[findStartingDate + 6];
    let day6 = this.user[findStartingDate + 5];
    let day5 = this.user[findStartingDate + 4];
    let day4 = this.user[findStartingDate + 3];
    let day3 = this.user[findStartingDate + 2];
    let day2 = this.user[findStartingDate + 1];
    let day1 = this.user[findStartingDate]
    console.log(day7);
    return [day7.numOunces, day6.numOunces, day5.numOunces, day4.numOunces, day3.numOunces, day2.numOunces, day1.numOunces];
  }
}

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}
