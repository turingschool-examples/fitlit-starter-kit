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
  returnUserName() {
    const firstName = this.name.split(" ");
    return firstName[0];
  }

  // returnFriendName(userRepository) {
  //     let friendNames = [];
  //     this.friends.forEach((friend) => {
  //       console.log('friend', friend)
  //       userRepository.forEach((user) => {
  //         if (user.id === friend) {
  //           friendNames.push(user.name);
  //         };
  //       });
  //     });
  //     return friendNames;
  //   };


};

export default User;
