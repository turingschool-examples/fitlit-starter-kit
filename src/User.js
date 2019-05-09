if (typeof module !== 'undefined') {
  var users = require('../data/users-test-data')
} else {
  var users = userData
}
class User {
  constructor(index) {
    this.userData = users[index];
  }
  returnUserFirstName() {
    return this.userData.name.split(' ').shift()
  }
}

if (typeof module !== 'undefined') {
  module.exports = User;
}