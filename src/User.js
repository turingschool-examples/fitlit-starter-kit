class User {
  constructor(userData) {
    this.id = userData.id;
    this.name = userData.name;
    this.address = userData.address;
    this.email = userData.email;
    this.strideLength = userData.strideLength;
    this.friends = userData.friends;
  }

  getFirstName() {
    return this.name.split(' ')[0];
  }
}

module.exports = User;