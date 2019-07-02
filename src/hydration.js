class Hydration {
  constructor(currentUser) {
    this.currentUser = currentUser;
  }

  returnFluidOunces(specificDate) {
    let found = this.currentUser.find(el => el.date === specificDate);
    return found.numOunces;
  }

  returnAWeek(firstDate) {
    let index = this.currentUser.findIndex(el => el.date === firstDate);
    return this.currentUser.splice(index, 7);
  }

  returnAverageWeeklyFluidOunces(firstDate) {
    const week = this.returnAWeek(firstDate);
    return Math.ceil(week.reduce((acc, total) => acc + total.numOunces, 0) / week.length);
  }
}

module.exports = Hydration;