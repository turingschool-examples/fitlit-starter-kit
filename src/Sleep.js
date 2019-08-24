class Sleep {
  constructor(userData) {
    this.userData = userData;
  }

  changeTimeFormat(date) {
    const newDateFormat = new Date(date)
    return newDateFormat.getTime();
  }
  
  userTotalAvg(property) {
    const total = this.userData.reduce((acc, user) => acc += user[property], 0);
    return Math.round(total / this.userData.length)
  }

  getStatsFromDay(date, property) {
    return this.userData.find(day => day.date === this.changeTimeFormat(date))[property];
  }

  getWeek(givenDate) {
    const arrayOfDates = this.userData.map(day => day.date);
    const index = (((arrayOfDates.length - arrayOfDates.findIndex(date => this.changeTimeFormat(givenDate) === date)) * -1) - 6);
    const weeklyArr = this.userData.slice(index, (index + 7)).reverse();
    return weeklyArr;
  }

  getWeeklyAvg(givenDate, property) {
    const weekArr = this.getWeek(givenDate)
    const weekTotal = weekArr.reduce((total, day) => {
      total += day[property];
      return total
    }, 0)
    return parseFloat((weekTotal / 7).toFixed(1))
  }

  getSleepHoursByDate(targetDate) {
    let correctDate = this.changeTimeFormat(targetDate)
    return this.userData.find(day =>{
      if (correctDate === day.date) {
        return day
      }
    }).hoursSlept
  }

  

};


if (typeof module !== 'undefined') {
  module.exports = Sleep;
}