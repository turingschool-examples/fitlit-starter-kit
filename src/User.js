class User {
  constructor(userData) {
    this.userData = userData;
    this.id = userData.id;
    this.name = userData.name;
    this.address = userData.address;
    this.strideLength = userData.strideLength;
    this.dailyStepGoal = userData.dailyStepGoal;
  }
  getFirstName() {
    return this.userData.name.split(' ')[0];
  }
}

if(typeof module !== 'undefined') {
  module.exports = User;
}