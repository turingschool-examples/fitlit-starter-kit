if (typeof module !== "undefined") {
  sleepFilePath = require('../data/sleepSub2');
} else {
  sleepFilePath = sleepData
}

class Sleep {
  constructor(userID) {
    this.userID = userID,
    this.data = sleepFilePath
  }

  getAvgHoursSlept(userID) {
    let users = this.data.filter(function(user) {
      return user.userID === userID;
    });
    return (users.reduce((avgSleep, currentUser) => {
      return avgSleep += currentUser.hoursSlept;
    }, 0) / users.length).toFixed(1);
  }

  getAvgSleepQuality(userID) {
    let users = this.data.filter(function(user) {
      return user.userID === userID;
    });
    return (users.reduce((sleepQual, currentUser) => {
      return sleepQual += currentUser.sleepQuality;
    }, 0) / users.length).toFixed(1);
  }

  getHoursSleptOnDay(userID, date) {
    return this.data.find(user => user.userID === userID && user.date === date).hoursSlept;
  }

  getSleepQualityOnDay(userID, date) {
    return this.data.find(user => user.userID === userID && user.date === date).sleepQuality;
  }

  instantiateSleep() {
    return this.data.map(sleep => (sleep = new Sleep(sleep)));
  }
}

if (typeof module !== 'undefined') {
  module.exports = Sleep;
}