if (typeof module !== 'undefined') {
  userData = require('../data/users-test-data')
}

class User {
  constructor(index) {
    this.userObj = userData[index];
  }
  returnUserFirstName() {
    return this.userObj.name.split(' ').shift()
  }
}

if (typeof module !== 'undefined') {
  module.exports = User;
}