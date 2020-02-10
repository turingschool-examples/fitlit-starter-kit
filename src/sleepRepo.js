class SleepRepo {
  constructor(sleepData) {
    this.sleepData = sleepData;
  }

  averageSleepQuality() {
    let averageAllSleep = this.sleepData.reduce((acc, users) => {
    acc += users.sleepQuality;
    return acc
    }, 0)
    return Math.round(averageAllSleep / this.sleepData.length);
    }
  }







if(typeof module !== 'undefined') {
  module.exports = SleepRepo;
};
