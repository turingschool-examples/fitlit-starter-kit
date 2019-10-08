
class User {
  constructor(userData) {
    this.userData = userData;
  }
  getFirstName() {
    const name = this.userData.name.split(' ')
    return name[0];
  }
}

if (typeof module !== "undefined") {
  module.exports = User;
}