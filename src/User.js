class User {
  constructor(userData) {
    this.userData = userData;
  }

  getFirstName() {
    return this.userData.name.split(' ')[0];
  }
}

export default User;