class User {
  constructor(currentUserData) {
    this.currentUserData = currentUserData;
    this.id = currentUserData.id;
    this.name = currentUserData.name;
    this.address = currentUserData.address;
    this.email = currentUserData.email;
    this.strideLength = currentUserData.strideLength;
    this.dailyStepGoal = currentUserData.dailyStepGoal;
    this.friends = currentUserData.friends;
  }

  returnFirstName() {
    let firstName = this.name.split(" ");
    return firstName[0];
  }
}


if (typeof module !== 'undefined') {
    module.exports = User;
}
