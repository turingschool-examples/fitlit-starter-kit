'use strict'

class User {
  constructor(userData, id) {
    this.name = userData[id - 1].name;
    this.address = userData[id - 1].address;
    this.email = userData[id - 1].email;
    this.strideLength = userData[id - 1].strideLength;
    this.dailyStepGoal = userData[id - 1].dailyStepGoal;
  }

  getFirstName() {
    return this.name.split(' ')[0]
  }

}
if (typeof module !== 'undefined') {
  module.exports = User;
}