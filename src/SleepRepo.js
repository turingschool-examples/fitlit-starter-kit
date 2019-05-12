class SleepRepo {
  constructor(dataFilePath) {
    this.dataFilePath = dataFilePath;
  }

  getSleepData() {
    let allSleepData = this.dataFilePath.map(el => el.sleepData);
    let joined = [].concat.apply([], allSleepData);
    return joined
  }

  avgSleepQual() {
    let allSleepQuality = this.getSleepData().map(el => el.sleepQuality);
    let average = allSleepQuality.reduce((acc, curr) => acc + curr / allSleepQuality.length);
    return Math.round(average);
  }

  goodSleepQual(date) {

  }

  mostSleep(date) {

  }

  worstSleepQual() {
    
  }
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = SleepRepo;
}