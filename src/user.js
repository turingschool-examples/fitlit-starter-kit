'use strict'

class User {
  constructor(id, name, address, email, strideLength, dailyStepGoal) {
    this.id = userData[id - 1];
    this.name = userData.name;
    this.address = userData.address;
    this.email = userData.email;
    this.strideLength = userData.strideLength;
    this.dailyStepGoal = userData.dailyStepGoal;
  }

  getFirstName(id) {
    return userData[id].name.split(' ')[0]
  }

}
if (typeof module !== 'undefined') {
  module.exports = User;
}