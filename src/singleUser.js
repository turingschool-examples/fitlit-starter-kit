class User {
  constructor(randomUser) {
    this.randomUser = randomUser;
  }

  returnFirstName() {
    return this.randomUser.name.split(" ")[0]
  }
  returnUserFirstName(id, userData) {
  return sampleUsers.find(user => id === user.id).name
  .split(' ')
  .shift();
}
};




if (typeof module !== 'undefined') {
  module.exports = User;
}

