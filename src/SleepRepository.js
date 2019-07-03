dataFilePath = require('../data/sleepSub');

class SleepRepository {
  constructor (userID) {
    this.userID = userID,
    this.data = dataFilePath
  }

  getAvgSleepQuality() {
    return (this.data.reduce(function(sleepQual, currentUser) {
      return sleepQual += currentUser.sleepQuality;
    }, 0) / this.data.length).toFixed(1);
  };

  getHighestAvgSleepOnDay(sleepDate) {
    return this.data.forEach(user => {
      console.log(user.hoursSlept);
    });
  };
}

if (typeof module !== 'undefined') {
  module.exports = SleepRepository;
}