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
    return userArray.slice(index, 8).map((obj) => obj.hoursSlept);
  }

  dailySleepQualityPerWk(id, day) {
    let userArray = this.consumerInfo(id);
    let index = this.startDayIndx(id, day);
    return userArray.slice(index, 9).map((obj) => obj.sleepQuality);
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

    // console.log(ids)
    let slpQualWk = ids.map(el => {
        var newObj = {};
        newObj.id = el;
        newObj.slpQual = this.consumerInfo(el).slice((this.startDayIndx(el, startDate)), 7).map(el => el.sleepQuality);
        return newObj;
      });
    let slpQualOverWk = slpQualWk.map(obj => {
      obj.slpQual = obj.slpQual.reduce((acc, value) => {
      return (acc + value);
      }, 0)/obj.slpQual.length;
    });
    // .reduce((acc, slpQlDay) => acc + slpQual);
    console.log(slpQualWk);
      // console.log(ids, slpQualWk);
    // this.sleepData.reduce()

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

