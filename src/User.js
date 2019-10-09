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
    this.ouncesRecord = {};
  }
  getFirstName() {
    var names = this.name.split(' ');
    return names[0];
  }
  updateHydration(date, amount) {
    this.ouncesAverage = Math.round((this.ouncesAverage + amount) / 2);
    this.ouncesRecord[date] = amount;
  }
}

if (typeof module !== 'undefined') {
  module.exports = User;
}
