class User {
  constructor(id, name, address, strideLength, dailyStepGoal, friends = []) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.email = email;
    this.strideLength = strideLength;
    this.dailyStepGoal = dailyStepGoal;
    this.friends = friends;
  }

  getFirstName() {

  }
}


if (typeof module !== 'undefined') {
  module.exports = User;
}
