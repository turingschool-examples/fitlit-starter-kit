if (typeof module !== "undefined") {
sleepData = require('../data-subsets/sleep-subset');
}

class Sleep {
  constructor(userData) {
    this.userData = userData;
    this.id = userData.id;
    this.name = userData.name;
    this.sleepObjects = this.filterSleepData();
    this.hoursSleptDay =  this.filterToHoursSlept();
    this.sleepQualityDay = this.filterToSleepQuality();
  }

  filterSleepData() {
    return sleepData.filter(sleepObj => sleepObj.userID === this.id)
  }

  filterToHoursSlept() {
    return this.sleepObjects.map(day => day.hoursSlept);
  }

  filterToSleepQuality() {
    return this.sleepObjects.map(day => day.sleepQuality);
  }

  findAvgHoursSlept() {
    let sleepHours = this.hoursSleptDay.reduce((hours, day) => {
      hours += day;
      return hours;
    }, 0) / this.hoursSleptDay.length;
    return Number(sleepHours.toFixed(1));
  }

  // For a user, their average sleep quality per day over all time
  findAvgSleepQual() {
    let totSleepQual = this.sleepQualityDay.reduce((qual, day) => {
      qual += day;
      return qual;
    }, 0) / this.hoursSleptDay.length;
    return Number(totSleepQual.toFixed(1))
  }

  findDay(givenDate) {
    return this.sleepObjects.find(day => day.date === givenDate)
  }

  findSleepQualityDay(givenDate) {
    return this.findDay(givenDate).sleepQuality
  }

  findSleepHoursDay(givenDate) {
    return this.findDay(givenDate).hoursSlept
  }

  findWeek(startDate) {
    let dateIndex = this.sleepObjects.findIndex(obj => obj.date === startDate);
    return this.sleepObjects.slice(dateIndex, dateIndex + 7);
  }

  findSleepQualityWeek(startDate) {
    let allWeekData =  this.findWeek(startDate);
    return allWeekData.map(day => day.sleepQuality)
  }

  findSleepHoursWeek(startDate) {
    let allWeekData =  this.findWeek(startDate);
    return allWeekData.map(day => day.hoursSlept)
  }

  findBestAndWorstSleep(startDate) {
    let fullWeekData = this.findSleepHoursWeek(startDate);
    return [Math.min.apply(null, fullWeekData), Math.max.apply(null, fullWeekData)]
  }

}
  


if (typeof module !== 'undefined') {
  module.exports = Sleep;
}