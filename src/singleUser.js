class User {
  constructor(randomUser) {
    this.randomUser = randomUser;
  }

  returnFirstName() {
    return this.randomUser.name.split(" ")[0]
  }

if (typeof module !== 'undefined') {
  module.exports = User;
}

