class Hydro {
  constructor(data) {
    this.data = data
  }

  findAvgFluidOunces() {
    let avg = this.data.reduce((acc, day) => {
      acc += day.numOunces
      return acc
    }, 0)
    return Math.round(avg / this.data.length)
  }

  findFluidDate(date) {
    let day = this.data.find(element => element.date === date)
    return day.numOunces
  }

  findFluidWeek(date) {
    let index = this.data.findIndex(element => element.date === date)
    let week = this.data.slice(index, (index + 7))
    return week.map(day => {
      return day.numOunces
    });
  }
}
if (typeof module !== 'undefined'){
module.exports = Hydro;
}