class User {
  constructor(userDataObj) {
    this.id = userDataObj.id;
    this.name = userDataObj.name;
    this.address = userDataObj.address;
    this.email = userDataObj.email;
    this.strideLength = userDataObj.strideLength;
    this.dailyStepGoal = userDataObj.dailyStepGoal;
    this.friends = userDataObj.friends;
    this.hydrationToDate = ['Hydration objects'];
    this.activityToDate = ['Activity objects'];
    this.sleepToDate = ['Sleep objects'];
  }

  getUsersFirstName() {
    // RETURNS THE USERS FIRST NAME ONLY
    return this.name.split(' ')[0];
  }
}

if (typeof module !== 'undefined') {
  module.exports = User;
}
