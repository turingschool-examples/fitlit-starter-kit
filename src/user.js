'use strict'

class User {
  constructor(singleUserData) {
    this.id = singleUserData.id;
    this.name = singleUserData.name;
    this.address = singleUserData.address;
    this.email = singleUserData.email;
    this.strideLength = singleUserData.strideLength;
    this.dailyStepGoal = singleUserData.dailyStepGoal;
  }


  getFirstName(id) {
    return this.name.split(' ')[0]
  }

}
if (typeof module !== 'undefined') {
  module.exports = User;
}