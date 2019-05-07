class User {
  constructor(userData) {
    this.userData = userData
  }

  returnFirstName() {
    return this.userData.name.split(' ')[0];
  }
}

module.exports = User;