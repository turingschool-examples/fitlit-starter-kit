/* eslint-disable space-before-blocks */
class Hydration {
  constructor(object, date) {
    this.object = object
    this.date = date
  }
  getDailyOunces() {
    let day = this.object.find(el => el.date === this.date)
    return day.numOunces
  }

  getWeeklyOunces() {
    var week = this.object.reverse().slice(0, 7)
    return week.map(el => el.numOunces)
  }
}
   
  



if (typeof module !== 'undefined') {
  module.exports = Hydration;
}