const sleepData = require('../data-subsets/sleep-subset');

class Sleep {
  constructor(userData) {
    this.userData = userData;
    this.id = userData.id;
    this.name = userData.name;
    this.sleepObjects = this.filterSleepData();
    // this.hoursSleptDay =  this.filterToHoursSlept();
    this.sleepQualityDay = this.filterToSleepQuality();
  }

  filterSleepData() {
    return sleepData.filter(sleepObj => sleepObj.userID === this.id)
  }

  filterToHoursSlept() {
    return this.sleepObjects.map(day => day.hoursSlept);
  }

  findWeek(day) {
    let dateIndex = this.sleepObjects.findIndex(obj => obj.date === day);
    return this.sleepObjects.slice(dateIndex - 6, dateIndex + 1);
  }

  filterToSleepQuality() {
    return this.sleepObjects.map(day => day.sleepQuality);
  }

  findAvgHoursSlept() {
    const sleepHours = this.hoursSleptDay.reduce((hours, day) => {
      hours += day;
      return hours;
    }, 0) / this.hoursSleptDay.length;
    return Number(sleepHours.toFixed(1));
  }

  // For a user, their average sleep quality per day over all time
  findAvgSleepQual() {
    const totSleepQual = this.sleepQualityDay.reduce((qual, day) => {
      qual += day;
      return qual;
    }, 0) / this.hoursSleptDay.length;
    return Number(totSleepQual.toFixed(1))
  }

  
  // hoursSleptByDate(day) {
  //   return this.sleepObjects.find(obj => obj.date === day).hoursSlept; 
  // }
}

  
  


if (typeof module !== 'undefined') {
  module.exports = Sleep;
}