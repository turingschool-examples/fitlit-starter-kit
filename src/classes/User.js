class User {
  constructor(user) {
    this.id = user.id;
    this.name = user.name;
    this.address = user.address;
    this.email = user.email;
    this.strideLength = user.strideLength;
    this.dailyStepGoal = user.dailyStepGoal;
    this.friends = user.friends;
  }

  getFirstName() {
    return this.name.split(" ", 1).toString();
  }
}

if (typeof module !== "undefined") {
  module.exports = User;
}
