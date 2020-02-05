class User {
  constructor(userData) {
    this.id = userData.id;
    this.name = userData.name;
    this.address = userData.address;
    this.email = userData.email
    this.strideLength = userData.strideLength;
    this.dailyStepGoal = userData.dailyStepGoal;
    this.friends = userData.friends
    this.friendsNames = []
  }

  getFirstName() {
    return this.name.split(' ')[0];
  }

  getUserFriendNames() {
    let userIds = userData.filter(user => {
      return user.id
    })
    userIds.forEach((i) => {
      if(this.friends.includes(i.id)) {
        this.friendsNames.push(i.name)
      }
    })
  }
}


if (typeof module !== 'undefined') {
  module.exports = User;
}
