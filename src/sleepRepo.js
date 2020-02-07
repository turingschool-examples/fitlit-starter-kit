class SleepRepo {
  constructor(sleepData) {
    this.sleepData = sleepData;
  }
}

if(typeof module !== 'undefined') {
  module.exports = SleepRepo;
};
