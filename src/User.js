class User {
  constructor(userData) {
    this.userData = userData;
  }

  getFirstName() {
    return this.userData.name;
  }
}

export default User;