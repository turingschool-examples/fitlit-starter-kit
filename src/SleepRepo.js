class SleepRepo {
  constructor(dataFilePath) {
    this.dataFilePath = dataFilePath;
  }

  getSleepData() {
    let allSleepData = this.dataFilePath.map(el => el.sleepData);
    let joined = [].concat.apply([], allSleepData);
    return joined
  }

  getWeek(date) {
    let allSleepData = this.dataFilePath.map(el => el.sleepData.reverse());
    let dates = allSleepData[0].map(el => el.date);
    return dates.indexOf(date);
  }

  avgSleepQual() {
    let allSleepQuality = this.getSleepData().map(el => el.sleepQuality);
    let average = allSleepQuality.reduce((acc, curr) => acc + curr / allSleepQuality.length);
    return Math.round(average);
  }
  
  // I need to get the index of the element where the date is included.
  // I need to 
  goodSleepQual(date) {
    let index = this.getWeek(date);
    let allSleepData = this.dataFilePath.map(el => el.sleepData);
    let week = allSleepData.map(array => {
      return array.slice(index, index + 7);
    });
    let sleepQualityAverage = week.map(array => {
      let quality = array.map(el => el.sleepQuality);
      let average = quality.reduce((acc, curr) => acc + curr / quality.length);
      return Math.floor(average);
    });
    console.log(sleepQualityAverage)
  }

  mostSleep(date) {

  }

  worstSleepQual() {
    
  }
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = SleepRepo;
}