class User {
  constructor(userData) {
    this.userData = userData;
    this.id = userData.id;
    this.name = userData.name;
    this.address = userData.address;
    this.email = userData.email;
    this.strideLength = userData.strideLength;
    this.dailyStepGoal = userData.dailyStepGoal;
  }
  getFirstName() {
    return this.userData.name.split(' ')[0];
  }
}

if(typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = User;
}