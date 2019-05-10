class User {
  constructor (userData) {
    this.userData = userData
  }
  
  userFirstName() {
    let fullName = this.userData.name.split(' ');
    return fullName[0];
  }
}

if (typeof module !== 'undefined' && module.exports !== 'undefined') {
  module.exports = User;
}