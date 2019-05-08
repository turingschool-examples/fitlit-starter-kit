class User {
  constructor(currentUserData) {
    this.currentUserData = currentUserData;
  }

  returnFirstName() {
    return this.currentUserData.name.split(' ')[0];
  }
}

module.exports = User;