class Sleep {
  constructor(sleepData) {
    this.sleepData = sleepData;
  }

  consumerInfo(id) {
    return this.sleepData.filter(obj => obj.userID === id);
  }

  averageHoursSlept(id) {
    let userSleepData = this.consumerInfo(id).map(obj => obj.hoursSlept);
    let avgHoursSlept = userSleepData.reduce((acc, hours) => {
      return acc + hours;
    }, 0);
    return Math.round(avgHoursSlept / userSleepData.length);
  }

  averageQualitySleep(id) {
    let userSleepData = this.consumerInfo(id).map(obj => obj.sleepQuality);
    let avgSleepQuality = userSleepData.reduce((acc, quality) => {
      return acc + quality;
    }, 0);
    return Math.round(avgSleepQuality / userSleepData.length);
  }

  hoursSleptByDate(day, id) {
    return this.consumerInfo(id).find((obj) => obj.date === day).hoursSlept;
  }

  sleepQualityByDate(day, id) {
    return this.consumerInfo(id).find((obj) => obj.date === day).sleepQuality;
  }

  dailyHoursSleptPerWeek(id, day) {
    let userArray = this.consumerInfo(id);
    let userDay = userArray.filter(obj => obj.date === day);
    let index = userArray.indexOf(userDay[0]);
    return userArray.slice(index, 8).map((obj) => obj.hoursSlept);
  }

  dailySleepQualityPerWeek(id) {
    return this.consumerInfo(id).slice(-7).map((obj) => obj.sleepQuality);
  }

  averageSleepQuality() {
    let sleepQualityArr = this.sleepData.map((quality) => quality.sleepQuality).reduce((acc, quality) => {
      return acc + quality;
    }, 0);
    return Math.round(sleepQualityArr / this.sleepData.length);
  }

  userSleepQualityAboveThree(startDate) {

  }

  bestSleeper(day) {
    let sleepByDate = this.sleepData.filter(obj => obj.date === day);
    let topHours = sleepByDate.filter(person => person.hoursSlept).find(hours => Math.max(hours.hoursSlept)).hoursSlept;
    return sleepByDate.filter(person => person.hoursSlept === topHours);
  }
}

if (typeof module !== 'undefined') {
  module.exports = Sleep; 
}

