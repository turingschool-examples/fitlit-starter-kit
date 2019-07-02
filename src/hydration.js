class Hydration {
  constructor(currentUser) {
    this.currentUser = currentUser;
  }
  returnFluidOunces(specificDate) {
    let found = this.currentUser.find(el => el.date === specificDate);
    return found.numOunces;
  }

  returnAverageWeeklyFluidOunces() {
    return Math.ceil(this.currentUser.reduce((acc, total) => acc + total.numOunces, 0) / this.currentUser.length);
  }
}

module.exports = Hydration;