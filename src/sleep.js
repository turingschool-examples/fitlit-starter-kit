class Sleep {
  constructor(data) {
    this.data = data;
  }

  getAvgSleepHours(id) {
    let person = this.data.filter(user => {
      return user.userID === id;
    })

    let avgHours = person.reduce((acc, day) => {
      return acc += day.hoursSlept;
    }, 0)

    return parseFloat((avgHours / 11).toFixed(1));
  }

  getAvgSleepQual(id) {
    let person = this.data.filter(user => {
      return user.userID === id;
    })

    let avgQual = person.reduce((acc, day) => {
      return acc += day.sleepQuality;
    }, 0)

    return parseFloat((avgQual / person.length).toFixed(1));
  }

  getHoursSleptPerDay(date, id) {
    let person = this.data.filter(user => {
      return user.userID === id;
    })

    let selectedDay = person.filter(day => {
      return day.date === date;
    })

    return selectedDay[0].hoursSlept;
  }

  getSleepQualPerDay(date, id) {
    let person = this.data.filter(user => {
      return user.userID === id;
    })

    let selectedDay = person.find(day => {
      return day.date === date;
    })

    return selectedDay.sleepQuality;
  }

  getHoursSleptPerDayPerWeek(date, id) {
    let person = this.data.filter(user => {
      return user.userID === id;
    })

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

  getSleepQualPerDayPerWeek(date, id) {
    let person = this.data.filter(user => {
      return user.userID === id;
    })

    let selectedDay = person.find(day => {
      return day.date === date;
    })

    let indexOfSelectedDay = this.data.indexOf(selectedDay);

    let weekArray = this.data.slice((indexOfSelectedDay - 6), (indexOfSelectedDay + 1))

    let sleepQualArray = weekArray.map(day => {
      return day.sleepQuality;
    })

    return sleepQualArray

  }

}

if (typeof module !== "undefined") {
  module.exports = Sleep;
}
