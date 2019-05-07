class User {
  constructor(userData) {
    this.userData = userData;
  }
  getFirstName() {
    // Return a user’s first name only
    return this.userData.name.split(' ')[0];
  }

}

module.exports = User;