class User {
  constructor(userData){
    this.id = userData.id;
    this.name = userData.name;
    this.address = userData.address;
  }
}


if (typeof module !== 'undefined') {
  module.exports = User;
}