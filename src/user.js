
class User {
  constructor(currentUser) {
    this.id = currentUser.id;
    this.name = currentUser.name;
    this.address = currentUser.address;
    this.email = currentUser.email;
    this.strideLength = currentUser.strideLength;
    this.dailyStepGoal = currentUser.dailyStepGoal;
    this.friends = currentUser.friends;
  }

  returnFirstName() {
    return this.name.split(' ')[0]
  }

}

if (typeof module !== 'undefined') {
  module.exports = User;
}
