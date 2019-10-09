class User {
  constructor(userData) {
    this.id = userData.id;
    this.name = userData.name;
    this.address = userData.address;
    this.email = userData.email;
    this.StrideLength = userData.StrideLength;
    this.friends = userData.friends;

  }
}

module.exports = User;



// this.id = userData.id
// this.name = userData.name
// this.address = userData.address
// this.email = userData.email
// this.StrideLength = userData.StrideLength
// this.friends = userData.friends
