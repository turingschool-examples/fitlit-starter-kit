class User {
constructor(userInfo) {
  this.id = userInfo.id;
  this.name = userInfo.name;
  this.address = userInfo.address;
  this.email = userInfo.email;
  this.strideLength = userInfo.strideLength;
  this.dailyStepGoal = userInfo.dailyStepGoal;
  this.friends = userInfo.friends;
  this.friendNames;
}

  returnUserFirstName() {
    let firstName = this.name.split(' ');
    return firstName[0];
  }

  findFriendsNames(userData) {
    this.friendNames = [];
    this.friends.map(friend => {
      userData.forEach(person => {
        if(person.id === friend) {
          this.friendNames.push(person.name.split(' ')[0]);
        }
      })
    })
    return this.friendNames;
  }
}

if (typeof module !== 'undefined') {
  module.exports = User;
}
