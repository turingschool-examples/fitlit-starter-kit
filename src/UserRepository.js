const User = require('./User')
const userData = require('../data/users.js')

class UserRepository {
  constructor(data = []) {
    this.users = data.map(user => new User(user))
  }

  getUserData(id) {
    return this.users.filter(user => user.userID === id)[0]
  }

module.exports = UserRepository;
