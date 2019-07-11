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

  startDayIndx(id, day) {
    let userArray = this.consumerInfo(id);
    let userDay = userArray.filter(obj => obj.date === day);
    return userArray.indexOf(userDay[0]);
  }

  dailyHoursSleptPerWeek(id, day) {
    let userArray = this.consumerInfo(id);
    let index = this.startDayIndx(id, day);
    return userArray.slice(index, 7).map((obj) => obj.hoursSlept);
  }

  dailySleepQualityPerWk(id, day) {
    let userArray = this.consumerInfo(id);
    let index = this.startDayIndx(id, day);
    return userArray.slice(index, 7).map((obj) => obj.sleepQuality);
  }

  averageSleepQualForAll() {
    let sleepQualityArr = this.sleepData.map((quality) => quality.sleepQuality).reduce((acc, quality) => {
      return acc + quality;
    }, 0);
    return Math.round(sleepQualityArr / this.sleepData.length);
  }

  userSleepQualityAboveThree(startDate) {
    let ids = this.sleepData.filter(obj => 
      obj.date === startDate).map(obj => obj.userID);
    let slpQualWk = ids.map(el => {
      let newObj = {};
      newObj.id = el;
      let userBlock = this.consumerInfo(el);
      let index = this.startDayIndx(el, startDate);
      let userBlkWk = userBlock.slice((index), 7);
      newObj.slpQual = userBlkWk.map(el => el.sleepQuality);
      return newObj;
    });
    slpQualWk.map(obj => {
      obj.slpQual = this.averageQualitySleep(obj.id);
    });
    return slpQualWk.filter(obj => obj.slpQual >= 3);
  }

  bestSleeper(day) {
    let sleepByDate = this.sleepData.filter(obj => obj.date === day);
    let topHours = sleepByDate.filter(person => person.hoursSlept).find(hours => Math.max(hours.hoursSlept)).hoursSlept;
    return sleepByDate.filter(person => person.hoursSlept === topHours);
  }

  sleepComp(day, id) {
    if (this.sleepQualityByDate(day, id) >= this.averageQualitySleep(id) && this.hoursSleptByDate(day, id) >= this.averageHoursSlept(id)) {
      return true;
    } else {
      return false;
    }
  }
}

if (typeof module !== 'undefined') {
  module.exports = Sleep; 
}

