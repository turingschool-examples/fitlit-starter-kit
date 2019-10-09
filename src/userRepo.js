class UserRepo {
  constructor(email, usersData){
    this.email = email;
    this.usersData = usersData;
    this.id = null;
    this.userData = null;
  }

  getUserData(email) {
    this.userData = this.usersData.find(userData => userData.email === email);
    return this.userData;
  }

}


if (typeof module !== 'undefined') {
  module.exports = UserRepo;
}
