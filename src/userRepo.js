'use strict'
const user = require('../src/user')

class UserRepo {
  constructor(users) {
    this.users = users;
  }

  getUserData(id) { // create users array
    this.users.push(user)
    return this.users[id - 1]
  }

}
if (typeof module !== 'undefined') {
  module.exports = UserRepo;
}