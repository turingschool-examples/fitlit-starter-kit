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
  updateHydration(amount) {
    // console.log('KAJBDKAJNDL');
    // update ounces record with key-value pair of date: amount
    // update the average
  }
}

if (typeof module !== 'undefined') {
  module.exports = User;
}
