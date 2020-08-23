class User {
  constructor(userData) {
    this.userData = userData;
  }

  returnFristName(){
    const firstName = this.userData.name.split(" ");
    console.log(firstName);
    return firstName[0];
  }
}


if (typeof module !== 'undefined') {
  module.exports = User;
}
