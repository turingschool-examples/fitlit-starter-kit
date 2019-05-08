// const data = require('../data/users')

class User {
  constructor(data, index) {
    this.userData = data[index];
  }
  returnUserFirstName() {
    return this.userData.name.split(' ').shift()
  }
}

module.exports = User;