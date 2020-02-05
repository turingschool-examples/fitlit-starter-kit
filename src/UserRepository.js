const data = require('../data/users.js');
const userData = data.testData;

class UserRepository {
  constructor(userData) {
    this.data = userData
  }
}


if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}