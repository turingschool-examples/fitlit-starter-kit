class Sleep {
  constructor(object, date) {
    this.object = object;
    this.date = date;
  }
  getHoursPerDay() {
    let day = this.object.find(el => el.date === this.date)
    return day.hoursSlept
  }
  getQualityPerDay() {
    let day = this.object.find(el => el.date === this.date)
    return day.sleepQuality
  }
  getWeeklyData(attribute) {
    let index = this.object.findIndex(day => day.date === this.date)
    var week = this.object.slice(index - 6, index + 1).reverse()
    return week.map(el => el[attribute])
  }
  getWorstQuality(attribute) {
    let weekAttribute = this.getWeeklyData(attribute);
    let index = this.object.findIndex(day => day.date === this.date)
    var week = this.object.slice(index - 6, index + 1).reverse()
    let worst = Math.min(...weekAttribute)
    let worstDay = week.find(day => day.sleepQuality === worst)
    return worstDay;
  }
}
if (typeof module !== 'undefined') {
  module.exports = Sleep;
}