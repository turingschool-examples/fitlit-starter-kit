const User = require ('../src/User');

class UserRepository {
  constructor(userData) {
    this.users = [];
    this.userData = userData;
  }

  createUsers() {
    this.userData.forEach((userDataObject, i) => {
      var user = new User(this.userData[i]);
      this.users.push(user);
    });
  }

  returnUserData(id) {
    let currentUserData
    this.userData.forEach((userDataObject, i) => {
      if (this.userData[i].id === id) {
        currentUserData = this.userData[i];
      }
    });
   return currentUserData;
  }

}

if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}
