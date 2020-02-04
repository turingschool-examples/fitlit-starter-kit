class User {
  constructor(id, name, address, email, strideLength, dailyStepGoal, friends) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.email = email;
    this.strideLength = strideLength;
    this.dailyStepGoal = dailyStepGoal;
    this.friends = friends;
    this.hydrationToDate = ['Hydration objects'];
    this.activityToDate = ['Activity objects'];
    this.sleepToDate = ['Sleep objects'];
  }

  getUsersFirstName() {
    // RETURNS THE USERS FIRST NAME ONLY
  }


}

if (typeof module !== 'undefined') {
  module.exports = User;
}
