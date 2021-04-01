
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
  let sortedWeeklyWater = this.user.sort((a, b) => {
    return b.date - a.date;
  })
    let findStartingDate =
        sortedWeeklyWater.findIndex(hydration => hydration.date === date);
    let day1 = sortedWeeklyWater[findStartingDate + 6];
    let day2 = sortedWeeklyWater[findStartingDate + 5];
    let day3 = sortedWeeklyWater[findStartingDate + 4];
    let day4 = sortedWeeklyWater[findStartingDate + 3];
    let day5 = sortedWeeklyWater[findStartingDate + 2];
    let day6 = sortedWeeklyWater[findStartingDate + 1];
    let day7 = sortedWeeklyWater[findStartingDate]
    return [day7, day6, day5, day4, day3, day2, day1];
  }
}

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}