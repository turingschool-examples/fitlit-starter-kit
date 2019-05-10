if (typeof module !== 'undefined') {
  userData = require('../data/users-test-data')
  UserRepo = require('./UserRepo')
}

class User {
  constructor(userID) {
    this.user = (this.returnUserData(userID));
  }

  returnUserData(index) {
    return userData.find(ele => ele.id === index)
  }

  returnUserFirstName() {
    return this.user.name.split(' ').shift()
  }
}

if (typeof module !== 'undefined') {
  module.exports = User;
}