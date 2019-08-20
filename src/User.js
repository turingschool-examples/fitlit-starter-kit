// const userData = require('./data-subsets/users-subset')

class User {
  constructor(userData) {
    this.userData = userData;
  }
  getFirstName() {
    let name = this.userData.name.split(' ')[0];
    return name;
  }
}





if (typeof module !== 'undefined') {
  module.exports = User;
}