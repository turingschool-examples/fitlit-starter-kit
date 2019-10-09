class Sleep {
  constructor(data) {
    this.data = data
  }

  findAvgSleepAll() {
    let hours = this.data.reduce((acc, day) => {
      acc += day.hoursSlept
      return acc
    }, 0)
    return (hours / this.data.length).toPrecision(1)
  }

  findAvgQualAll() {
    let quality = this.data.reduce((acc, day) => {
      acc += day.sleepQuality
      return acc
    }, 0)
    return (quality / this.data.length).toPrecision(2)
  }

  findHoursDay(date) {
    let day = this.data.find(element => element.date === date)
    return day.hoursSlept
  }

  findQualDay(date) {
    let day = this.data.find(element => element.date === date)
    return day.sleepQuality
  }

  findSleepWeek(date) {
    let index = this.data.findIndex(element => element.date === date)
    let week = this.data.slice(index, (index + 7))
    return week.map(day => {
      return day.hoursSlept
    });
  }

  findQualWeek(date) {
    let index = this.data.findIndex(element => element.date === date)
    let week = this.data.slice(index, (index + 7))
    return week.map(day => {
      return day.sleepQuality
    });
  }

}

if (typeof module !== 'undefined'){
  module.exports = Sleep;
  }