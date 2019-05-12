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
    let allSleepData = this.getSleepData();
    let dates = allSleepData.map(el => el.date);
    dates.indexOf(date);
  }

  avgSleepQual() {
    let allSleepQuality = this.getSleepData().map(el => el.sleepQuality);
    let average = allSleepQuality.reduce((acc, curr) => acc + curr / allSleepQuality.length);
    return Math.round(average);
  }
  
  // I need to get the index of the element where the date is included.
  // I need to 
  goodSleepQual(date) {
    let index = this.getWeek();
    let allSleepData = this.dataFilePath.map(el => el.sleepData);
    
    console.log(allSleepData)

  }

  mostSleep(date) {

  }

  worstSleepQual() {
    
  }
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = SleepRepo;
}