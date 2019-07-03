class Hydration {
  constructor(currentUser) {
    this.currentUser = currentUser;
  }

  returnFluidOunces(specificDate) {
    let found = this.currentUser.find(el => el.date === specificDate);
    return found.numOunces;
  }

  returnAWeek(firstDate) {
    let data = [...this.currentUser]
    let index = data.findIndex(el => el.date === firstDate);
    return data.splice(index, 7);
  }

  returnAverageWeeklyFluidOunces(firstDate) {
    const week = this.returnAWeek(firstDate);
    return week.map(el => el.numOunces);
  }
}

module.exports = Hydration;
