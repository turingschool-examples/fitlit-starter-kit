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

  tellAboutSleep(date, hours, quality) {
    // tell about sleep
  }
}

module.exports = User;

