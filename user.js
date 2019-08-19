class User {
  constructor(id, name, address, email, strideLength, stepGoal, friends) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.email = email;
    this.strideLength = strideLength;
    this.dailyStepGoal = stepGoal;
    this.friends = friends;
  }
}

module.exports = User;