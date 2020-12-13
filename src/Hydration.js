class Hydration {
  constructor(obj) {
    this.id = obj.userID;
    this.date = obj.date;
    this.numOunces = obj.numOunces;
  }
  returnOuncesToday() {
    return this.numOunces;
  }
}

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}
