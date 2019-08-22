class Sleep {
  constructor(obj) {
    this.data = obj;
  }

  getAvgSleepHours() {
    let person = this.data;

    let avgHours = person.reduce((acc, day) => {
      return acc += day.hoursSlept;
    }, 0)

    return parseFloat((avgHours / 11).toFixed(1));
  }

  getAvgSleepQual() {
    let person = this.data;

    let avgQual = person.reduce((acc, day) => {
      return acc += day.sleepQuality;
    }, 0)

    return parseFloat((avgQual / 11).toFixed(1));
  }

  getHoursSleptPerDay(date) {
    let person = this.data;

    let selectedDay = person.find(day => {
      return day.date === date;
    })

    return selectedDay.hoursSlept;
  }

  getSleepQualPerDay(date) {
    let person = this.data;

    let selectedDay = person.find(day => {
      return day.date === date;
    })

    return selectedDay.sleepQuality;
  }

  getHoursSleptPerDayPerWeek(date) {
    let person = this.data;

    let selectedDay = person.find(day => {
      return day.date === date;
    })

    let indexOfSelectedDay = this.data.indexOf(selectedDay);

    let weekArray = this.data.slice((indexOfSelectedDay - 6), (indexOfSelectedDay + 1))

    let sleepHourArray = weekArray.map(day => {
      return day.hoursSlept;
    })

    return sleepHourArray;
  }

}

if (typeof module !== "undefined") {
  module.exports = Sleep;
}
