class User {
  constructor(userData){
    this.id = userData.id;
    this.name = userData.name;
    this.address = userData.address;
    this.email = userData.email;
  }
}


if (typeof module !== 'undefined') {
  module.exports = User;
}