const fakeUsers = require('../fakeData/fakeUsers');
class UserRepository {
  constructor(data) {
    this.data = data;
  }

  getUserData(id) {
    return this.data.find(function (user) {
      if (user.id === id) {
        return user
      }
    })
  }
}

if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}