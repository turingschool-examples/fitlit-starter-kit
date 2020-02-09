const Sleep = require('../src/Sleep');

class User {
  constructor(userData, sleepData) {
    this.id = userData.id;
    this.name = userData.name;
    this.address = userData.address;
    this.email = userData.email;
    this.strideLength = userData.strideLength;
    this.dailyStepGoal = userData.dailyStepGoal;
    this.friends = userData.friends;

    this.sleep = new Sleep(sleepData, userData.id);
  }

  returnUserName() {
    const firstName = this.name.split(' ');
    return firstName[0];
  }

  avgHoursSlept() {
    return this.sleep.avgHoursSlept();
  }

  avgSleepQuality() {
    return this.sleep.avgSleepQuality()
  }

  hoursSlept(sleepDate) {
    return this.sleep.hoursSlept(sleepDate)
  }

  hoursSleptWeekOf(weekStart) {
    return this.sleep.hoursSleptWeekOf(weekStart)
  }

  qualitySleptWeekOf(weekStart) {
    return this.sleep.qualitySleptWeekOf(weekStart)
  }

}

if (typeof module !== 'undefined') {
  module.exports = User;
}
