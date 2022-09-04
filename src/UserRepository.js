import { use } from 'chai';


class UserRepository {
 constructor(users) {
  this.users = users;
 }

 findUserData(id) {
  const findUserData = this.users.find(user => id === user.id)
    return findUserData

 }

 calculateAvgStepGoal() {
  let numOfElements = 0;
  const stepGoal = this.users.reduce((acc, element) => {
    acc += element.dailyStepGoal
    numOfElements++
    return acc
    }, 0)
  return Math.round(stepGoal / this.users.length)
  }

/* function below is currently failing, but in progress */
  // findToday(id) {
  //   let currentUser = this.findUserData(id)
  //   let getDates = currentUser.map(user => user.date)
  //   console.log(getDates)
  //   let dateIndex = getDates.indexOf(getDates.length)
  //   console.log(dateIndex)
  //   return today
  //   }

}

export default UserRepository;
