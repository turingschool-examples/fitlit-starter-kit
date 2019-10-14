class User {
  constructor(currentUser) {
    this.id = currentUser.id;
    this.name = currentUser.name;
    this.address = currentUser.address;
    this.email = currentUser.email;
    this.strideLength = currentUser.strideLength;
    this.dailyStepGoal = currentUser.dailyStepGoal;
    this.friends = currentUser.friends;
    this.userInfo;
  }

  getFirstName() {
    let firstName = this.name.split(' ')[0];
    return firstName;
  }

  findFriends(userRepo) {
    const friends = userRepo.usersData.filter((user) => this.friends.includes(user.id));
    return friends;
  }
}

if (typeof module !== 'undefined') {
  module.exports = User;
}
