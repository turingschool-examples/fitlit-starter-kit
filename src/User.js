const data = require('../data/users')

class User {
  constructor(data) {
    this.userData = data;
  }
  returnUserFirstName(index){
    return this.userData[index].name.split(' ').shift()
  }
}

module.exports = User;