class User {
  constructor(userInformation) {
    this.id = userInformation.id;
    this.name = userInformation.name;
    this.address = userInformation.address;
    this.email = userInformation.email;
    this.strideLength = userInformation.strideLength;
    this.dailyStepGoal = userInformation.dailyStepGoal;
    this.friends = userInformation.friends;
  }
  getUserFirstName() {
    let firstName = this.name.split(' ');
    return firstName[0];
  }
}

export default User;