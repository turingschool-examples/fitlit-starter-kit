
class User {
  constructor(data, index) {
    this.userData = data[index];
  }
  returnUserFirstName() {
    return this.userData.name.split(' ').shift()
  }
}

if (typeof module !== undefined) {
  module.exports = User;
}