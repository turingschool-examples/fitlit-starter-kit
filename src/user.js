class User {
  constructor(object) {
    this.id = object.id;
    this.name = object.name;
    this.address = object.address;
    this.email = object.email;
    this.strideLength = object.strideLength;
    this.dailyStepGoal = object.dailyStepGoal;
    this.friends = object.friends;
  }


  getFirstName() {
    return this.name.split(' ')[0];
  }
  
  getStrideLength() {
    return this.strideLength;
  }
}

if (typeof module !== 'undefined') {
  module.exports = User;
}