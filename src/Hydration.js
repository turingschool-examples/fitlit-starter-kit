class Hydration {
  constructor(data) {
    this.data = data;
  }

  getUserData(id) {
    return this.data.filter(object => object.userID === id);
  }

  getLifetimeAverage(id) {
    return Math.floor(this.getUserData(id).reduce((a, c) => a + c.numOunces, 0) / this.getUserData(id).length);
  }

  getDay(id, date) {
    return this.getUserData(id).find(data => data.date === date).numOunces;
  }

  getWeek(id, date) {
    let endDate = this.getUserData(id).findIndex(object => object.date === date);
    return endDate - 6 >= 0 ?
      this.getUserData(id).slice(endDate - 6, endDate + 1):
      this.getUserData(id).slice(0, endDate + 1);
  }
}

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}
