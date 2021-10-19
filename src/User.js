class User {
  constructor(userData) {
    this.id = userData.id;
    this.name = userData.name;
    this.address = userData.address;
    this.email = userData.email;
    this.strideLength = userData.strideLength;
    this.dailyStepGoal = userData.dailyStepGoal;
    this.friends = userData.friends;
  }

  displayFirstName() {
    const firstName = this.name.split(' ');
    return firstName[0];
  }

  calculateAvgOunces(hydrationInfo) {
    // const hydrationAverage = 
  }


  // want to use user ID as our input
  // want to return the avg daily ounces consumed

}

module.exports = User;
