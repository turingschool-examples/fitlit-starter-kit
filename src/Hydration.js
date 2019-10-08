class Hydration { // instance that is updated each time a user drinks in a given day (will reset each day)
  constructor(user) {
    this.userId = user.id;
    this.date = date;
    this.ouncesToday = 0;
    this.ouncesAverage = 0;
    this.ouncesRecord = []
  }
  drink(amount) {
    //will increase this.ouncesToday by amount
    //will increase this.ouncesTotal by amount
    //this.ouncesRecord.unshift(this.ouncesToday)
  }
  calculateAverageOunces() {
    //take first seven elements in this.ouncesRecord to calculate week's average
  }
}

module.exports = Hydration;
