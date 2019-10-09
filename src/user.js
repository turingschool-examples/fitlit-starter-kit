class User {
  constructor(data) {
    this.userId = data.userId;
    this.name = data.name;
    this.address = data.address;
    this.email = data.email;
    this.strideLength = data.strideLength;
    this.dailyStepGoal = data.dailyStepGoal;
    this.friends = data.friends;
  }

  returnFirstName() {

  }
}

if (typeof module !== 'undefined') {
  module.exports = User;
}
