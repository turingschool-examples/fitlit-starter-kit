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

  dailyHoursPerWeek(id) {
    return this.consumerInfo(id).slice(-7).map((obj) => obj.hoursSlept);
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
}

if (typeof module !== 'undefined') {
  module.exports = Sleep; 
}

