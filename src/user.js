class User {
  constructor(userData){
    this.id = userData.id;
  }
}


if (typeof module !== 'undefined') {
  module.exports = User;
}