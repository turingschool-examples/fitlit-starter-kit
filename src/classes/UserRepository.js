import User from "./User";

class UserRepository {
  constructor(users) {
    this.users = users;
  }

  getUser(id) {
    return this.users.find(user => user.id === id);
  }

  calculateAverageStepGoal() {
    let averageSteps = this.users.reduce((acc, user) => {
      acc += user.dailyStepGoal;
      return acc;
    }, 0)
    return Math.trunc(averageSteps / this.users.length);
  };

  returnUserFriendsName(id) {
    const friendsObj = this.getUser(id)
    let friendsArray = friendsObj.friends
    return friendsArray.reduce((acc, currentID)=> {
       this.users.forEach((user)=> {
        if(currentID === user.id) {
          acc.push(user.name);
        }; 
      });
      return acc;
    },[]);
  };

  getRandomUser() {
    const index = Math.floor(Math.random() * this.users.length);
    return new User(this.users[index]);
  }
};

export default UserRepository;