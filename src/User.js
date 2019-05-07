const data = require('../data/users')

class User {
  constructor(userData) {
    this.data = userData;
  }
  returnUserFirstName(index){
    return this.data[index].name.split(' ').shift()
  }
}

module.exports = User;