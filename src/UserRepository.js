import userData from './data/users';
import User from './User';
// const data = require('./data/users')

class UserRepository {
  constructor(data) {
    this.data = data
  }

  getData(userID) {
    let user = this.data.find((currentUser) => {
      if (currentUser.userData.id === userID) {
        return currentUser.userData
      }
    })
    return user
  }

  stepGoalAverage() {
    let sum = this.data.reduce((acc, user) => {
      acc += user.userData.dailyStepGoal
      return acc
    }, 0)
    let totalUsers = this.data.length
    return parseInt(sum / totalUsers)
  }
}

export default UserRepository;

// new UserRepository(data);
// A UserRepository holds onto all of the User objects
// It should have a parameter to take in user data

//parameters:
//data

//properties:
//this.data or this.userData -> something like that



// It should have methods to determine:

// Given a user’s ID, what is their user data?
  //go through the users
  //return the corresponding user object when its found
  //now we have access to their info


// The average step goal amongst all users
  //go through each user
  //possibly use reduce method?
  //get total daily step goal number
  //divide by user count