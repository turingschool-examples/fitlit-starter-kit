class User {
  constructor(randomUser) {
    this.randomUser = randomUser;
    console.log(randomUser)
  }
}


if (typeof module !== 'undefined') {
  module.exports = User;
}

