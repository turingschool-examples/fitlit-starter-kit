usersFilePath = require('../data/sleepSub');

class Sleep {
  constructor(userID) {
    this.userID = userID,
    this.data = usersFilePath
  }

  getAvgHoursSlept(userID) {
    let users = this.data.filter(function(user) {
      return user.userID === userID;
    });
      return (users.reduce((avgSleep, currentUser) => {
        return avgSleep += currentUser.hoursSlept;
      }, 0) / users.length).toFixed(1);
  };

  getAvgSleepQuality(userID) {
    let users = this.data.filter(function(user) {
      return user.userID === userID;
    });
      return (users.reduce((sleepQual, currentUser) => {
      //console.log(`hoursSlept is ${currentUser.hoursSlept}`);
      return sleepQual += currentUser.sleepQuality;
    }, 0) / users.length).toFixed(1);
  };

  getHoursSleptOnDay(userID, date) {
    return this.data.find(user => user.userID === userID && user.date === date).hoursSlept;
  };

  geSleepQualityOnDay(userID, date) {
    return this.data.find(user => user.userID === userID && user.date === date).sleepQuality;
  };
}

if (typeof module !== 'undefined') {
  module.exports = Sleep;
}