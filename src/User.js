class User {
  constructor (userData) {
    this.userData = userData
  }
  
  userFirstName() {
    let fullName = this.userData.name.split(' ');
    return fullName[0];
  }
}

module.exports = User;