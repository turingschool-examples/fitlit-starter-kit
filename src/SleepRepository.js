dataFilePath = require('../data/sleepSub');
User = require('../src/User');

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

  getSleptMostOnDay(sleepDate) {
    let dateOfSleep = this.data.filter(el => el.date === sleepDate);
    let maxSleep = 0;
    var sleepChamp = [];
    dateOfSleep.forEach(user => {
      if (user.hoursSlept > maxSleep) {
        maxSleep = user.hoursSlept;
        sleepChamp[0] = user.userID;
      } else if (user.hoursSlept === maxSleep) {
        sleepChamp.push(user.userID);
      }
    });

    const user = new User("../data/UserSub.js");
    return user.getUserNameFromID(sleepChamp[0]);
  };
}

if (typeof module !== 'undefined') {
  module.exports = SleepRepository;
}