const Sleep = require('../src/Sleep');

class SleepRepo {
  constructor(data) {
    this.data = data.map(userData => new Sleep(userData));
  }
  returnAverageHoursSleptPerDay(userID) {
    const currentUserData = this.data.filter(data => data.userID == userID);
    const totalHoursSlept = currentUserData.reduce((acc, cur) => {
      return acc + cur.hoursSlept;
    }, 0);
    console.log(this.data[0]);
    const avgHoursSlept = totalHoursSlept / this.data.length;
    return avgHoursSlept;
  }
}

if (typeof module !== 'undefined') {
  module.exports = SleepRepo;
}
