const User = require('../src/User')


class UserRepository {
  constructor(data, id) {
    this.data = data;
    this.id = id;
  }

  findUserData() {
    return this.data.find(user => user.id === this.id)


}







if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}