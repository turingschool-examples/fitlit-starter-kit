class SleepRepo {
  constructor(dataFilePath) {
    this.dataFilePath = dataFilePath;
  }

  getSleepData() {
    let allSleepData = this.dataFilePath.map(el => el.sleepData);
    let joined = [].concat.apply([], allSleepData);
    return joined
  }

  getDateIndex(date) {
    let allSleepData = this.dataFilePath.map(el => {
      return el.sleepData.slice().reverse();
    });
    let dates = allSleepData[0].map(el => el.date);
    return dates.indexOf(date);
  }

  avgSleepQual() {
    let allSleepQuality = this.getSleepData().map(el => el.sleepQuality);
    let average = allSleepQuality.reduce((acc, curr) => {
      return acc + curr / allSleepQuality.length
    });
    return Math.round(average);
  }
  
  goodSleepQual(date) {
    let index = this.getDateIndex(date);
    let sleepData = this.dataFilePath.map(el => el.sleepData.slice().reverse());
    let week = sleepData.map(array => {
      return array.slice(index, index + 7);
    });
    let qualityAverage = week.map(array => {
      let quality = array.map(el => el.sleepQuality);
      let average = quality.reduce((acc, curr) => acc + curr / quality.length);
      return Math.floor(average);
    });
    let users = this.dataFilePath.filter((el, i) => qualityAverage[i] >= 3);
    return users.map(el => el.userID);
  }

  mostSleep(date) {
    let sleepData = this.dataFilePath.map(el => el.sleepData.slice().reverse());
    let dataByDate = sleepData.map(array => {
      return array.find(el => el.date.includes(date));
    });
    let sleepHours = dataByDate.map(el => el.hoursSlept);
    let greatestHour = Math.max(...sleepHours);
    let sleepiestUser = sleepHours.indexOf(greatestHour);
    return sleepiestUser;
  }

  worstSleepQual(date) {
    let index = this.getDateIndex(date);
    let sleepData = this.dataFilePath.map(el => el.sleepData.slice().reverse());
    let week = sleepData.map(array => {
      return array.slice(index, index + 7);
    });
    let qualityAverage = week.map(array => {
      let quality = array.map(el => el.sleepQuality);
      let average = quality.reduce((acc, curr) => acc + curr / quality.length);
      return Math.floor(average);
    });
    let users = this.dataFilePath.filter((el, i) => qualityAverage[i] <= 3);
    return users.map(el => el.userID);
  }
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = SleepRepo;
}