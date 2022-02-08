class User {
  constructor(userData) {
    this.userData = userData;
  }

  returnFirstName() {
    return this.userData.name.split(' ', 1)[0];
  }

}

export default User;
