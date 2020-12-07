const User = require('./User')
const userData = require('../data/users.js')

class UserRepository {
  constructor(data = []) {
    this.users = data.map(user => new User(user))
  }

module.exports = UserRepository;
