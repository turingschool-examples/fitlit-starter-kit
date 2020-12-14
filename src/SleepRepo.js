const Sleep = require('../src/Sleep');

class SleepRepo {
  constructor(data) {
    this.data = data.map(userData => new Sleep(userData));
  }
  returnAverageHoursSleptPerDay(userID) {
    const currentUserData = this.data.filter(data => data.id === userID);
    console.log(currentUserData);
    const totalHoursSlept = currentUserData.reduce((acc, cur) => {
      return acc + cur.hoursSlept;
    }, 0);
    const avgHoursSlept = totalHoursSlept / currentUserData.length;
    return avgHoursSlept;
  }
}

if (typeof module !== 'undefined') {
  module.exports = SleepRepo;
}
