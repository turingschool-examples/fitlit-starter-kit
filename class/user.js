class User {
  constructor(userData) {
    this.id = userData.id;
    this.name = userData.name;
    this.address = userData.address;
    this.email = userData.email;
    this.dailyStepGoal = userData.dailyStepGoal;
    this.strideLength = userData.strideLength;
    this.friends = userData.friends;
  }

  findUsersFirstName() {
	  return this.name.split(' ')[0];
  }

}

module.exports = User;

