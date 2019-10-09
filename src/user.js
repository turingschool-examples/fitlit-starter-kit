class User {
  constructor(userData){
    this.id = userData.id;
    this.name = userData.name
  }
}


if (typeof module !== 'undefined') {
  module.exports = User;
}