class UserRepo {
  constructor(userData) {
    this.userData = userData;
  }
  
  returnUserData(id) {
    return this.userData.find(user => user.id === id);
  }


}

module.exports = UserRepo;