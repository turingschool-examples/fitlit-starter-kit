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
     //console.log(`hoursSlept is ${currentUser.hoursSlept}`);
     return avgSleep += currentUser.hoursSlept;
  }, 0) / users.length).toFixed(1);
 }

  getAvgSleepQuality() {

  }
}

if (typeof module !== 'undefined') {
 module.exports = Sleep;
}