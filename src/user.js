class User {
  constructor(userDetails) {
    this.id = userDetails.id;
    this.name = userDetails.name;
    this.address = userDetails.address;
    this.email = userDetails.email;
    this.strideLength = userDetails.strideLength;
    this.dailyStepGoal = userDetails.dailyStepGoal;
    this.userFriends = userDetails.friends;
  };

  returnName() {
    const splitName = this.name.split(' ');
    return splitName[0];
  }
};

export default User;