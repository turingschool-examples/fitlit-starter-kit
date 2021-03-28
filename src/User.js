class User {
  constructor(dataElem) {
    this.id = dataElem.id;
    this.name = dataElem.name;
    this.address = dataElem.address;
    this.email = dataElem.email;
    this.stride = dataElem.strideLength;
    this.stepGoal  = dataElem.dailyStepGoal;
    this.friends = dataElem.friends;
  }

  returnFirstName() {
    const splitName = this.name.split(' ');
    const firstName = splitName[0];
    return firstName;
  }
}

module.exports = User;