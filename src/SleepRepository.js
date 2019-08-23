const Sleep = require('./Sleep')
const sleepData = require('../data-subsets/sleep-subset');
const userData = require('../data-subsets/users-subset');
const User = require('./User');

class SleepRepository {
  constructor() {
    this.userData = userData;
    this.sleepData = sleepData;
    this.users = new Sleep();
  }

  findGlobalSleepAverage() {
    // let globalSleepNums =
    return this.sleepData.map()
  }
}   




if (typeof module !== "undefined") {
  module.exports = SleepRepository;
}

