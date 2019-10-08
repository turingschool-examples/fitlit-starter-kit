class User {
    constructor(currentUserData) {
      this.currentUserData = currentUserData;
      this.id = currentUserData.id;
      this.name = currentUserData.name;
      // this.address;
      // this.email;
      // this.strideLength;
      // this.dailyStepGoal;
      // this.friends;
    }
}


if (typeof module !== 'undefined') {
    module.exports = User;
  };
