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
    const firstName = this.name.split(' ');
    return firstName[0];
  }

  findFriendsNames(userData) {
    let friendList = [];
    this.friends.filter(friend => {
      userData.forEach(person => {
        if(person.id === friend) {
          friendList.push(person);
        }
      })
    })
    return friendList.map(friend => {
      return {name: friend.name, stepGoal: friend.dailyStepGoal}
  })
  }
}

if(typeof module !== 'undefined') {
  module.exports = User;
};
