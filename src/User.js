class User {
  constructor(userData) {
    this.userData = userData;
  }

  returnUserFirstName() {
    return this.userData.name.split(" ")[0];
  }
}

if (typeof module !== 'undefined') {
module.exports = User;
}
