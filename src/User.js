// const data = require('../data/users');
// const userData = data.userData;
// const scripts = require('./scripts');

class User {
  constructor(data) {
    this.data = data;

  }
  getFirstName() {
    return this.data.name.split(' ', 1).join();
  }
}

module.exports = User;
