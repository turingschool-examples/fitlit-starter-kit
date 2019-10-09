class User {
  constructor(userData){
    this.id = userData.id;
    this.name = userData.name;
    this.address = userData.address;
    this.email = userData.email;
    this.strideLength = userData.strideLength;
  }
}


if (typeof module !== 'undefined') {
  module.exports = User;
}