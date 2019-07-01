class User {
  constructor(userData) {
    this.userData = userData;
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

