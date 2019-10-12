class User {
  constructor(userData) {
    this.id = userData.id;
    this.name = userData.name;
    this.address = userData.address;
    this.email = userData.email;
    this.strideLength = userData.strideLength;
    this.dailyStepGoal = userData.dailyStepGoal;
    this.friends = userData.friends;
    this.ouncesAverage = 0;
    this.ouncesRecord = [];
    this.hoursSleptAverage = 0;
    this.sleepQualityAverage = 0;
    this.sleepHoursRecord = [];
    this.sleepQualityRecord = []
  }
  getFirstName() {
    var names = this.name.split(' ');
    return names[0].toUpperCase();
  }
  updateHydration(date, amount) {
    this.ouncesRecord.unshift({[date]: amount});
    if(this.ouncesRecord.length) {
      this.ouncesAverage = Math.round((amount + (this.ouncesAverage * (this.ouncesRecord.length - 1))) / this.ouncesRecord.length);
    } else {
      this.ouncesAverage = amount;
    }
  }
  addDailyOunces(date) {
    return this.ouncesRecord.reduce((sum, record) => {
      let amount = record[date];
      if (amount) {
        sum += amount
      }
      return sum
    }, 0)
  }
  updateSleep(date, hours, quality) {
    this.sleepHoursRecord.unshift({[date]: hours});
    this.sleepQualityRecord.unshift({[date]: quality});
    if(this.sleepHoursRecord.length) {
      this.hoursSleptAverage = (hours + (this.hoursSleptAverage * (this.sleepHoursRecord.length - 1))) / this.sleepHoursRecord.length;
    } else {
      this.hoursSleptAverage = hours;
    }
    if(this.sleepQualityRecord.length) {
      this.sleepQualityAverage = (quality + (this.sleepQualityAverage * (this.sleepQualityRecord.length - 1))) / this.sleepQualityRecord.length;
    } else {
      this.sleepQualityAverage = quality;
    }
  }
}

if (typeof module !== 'undefined') {
  module.exports = User;
}
