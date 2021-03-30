class User {
  constructor(userData) {
    this.id = userData.id
    this.name = userData.name;
    this.address = userData.address;
    this.email = userData.email;
    this.strideLength = userData.strideLength;
    this.dailyStepGoal = userData.dailyStepGoal;
    this.friends = userData.friends;
  }

  firstName() {
    const splitString = this.name.split(" ");
    return splitString[0]
  }
}

module.exports = User;
