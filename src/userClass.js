class User {
  constructor(userObj) {
    this.id = userObj.id;
    this.name = userObj.name;
    this.address = userObj.address;
    this.email = userObj.email;
    this.strideLength = userObj.strideLength;
    this.dailyStepGoal = userObj.dailyStepGoal;
    this.friends = userObj.friends;
  }
}

if (typeof module !== 'undefined') {
  module.exports = User;
}