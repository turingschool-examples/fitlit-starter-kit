class User {
  constructor(userData) {
    this.userData = userData;
  }

  returnUserFirstName() {
    return this.userData.name.split(" ")[0];
  }
}

module.exports = User;