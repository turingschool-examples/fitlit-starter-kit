import User from "./User";

class UserRepository {
    constructor(allUserData, hydrationData, sleepData) {
        this.userData = allUserData;
        this.hydrationData = hydrationData;
        this.sleepData = sleepData;
        this.users = []
        this.selectedUser;
    }
    initialize() {
        this.userData.forEach(user => {
            let newUser = new User(user)
            this.users.push(newUser)
        })
        this.hydrationData.forEach(hydroData => {
          // console.log(this.findUser(hydroData.userID));
          if (this.findUser(hydroData.userID) === false) {
            return;
          } else {
            let user = this.findUser(hydroData.userID)
            user.hydrationData.push(hydroData)
            // console.log(user.hydrationData);
          }
        })
        this.sleepData.forEach(sleepData => {
          if (this.findUser(sleepData.userID) === false) {
            return;
          } else {
            let user = this.findUser(sleepData.userID)
            user.sleepData.push(sleepData)
          }
        })
        this.selectedUser = this.randomizeUser()
        this.userData = null
        this.hydrationData = null
        this.sleepData = null
        // console.log(this.selectedUser)
    }
    findUser(id) {
        //we now have a users array so this must change to users so we can find the correct id
        // let userExists = this.users.filter(user => {
        //   return user.id
        // })
      let userIdArray = this.users.map(user => {
        return user.id;
        })
        if (userIdArray.includes(id)) {
          // console.log('true');
        return this.users.find(user => {
            return  user.id === id});
        } else {
          // console.log('false');
          return false;
        }
    }
    // filterUserData(id) {
    //   let userData = this.users.filter(user => {
    //     return  user.id === id});
    //     console.log(userData);
    //   return userData;
    // }
    randomizeUser() {
        let selectedUserIndex = Math.floor(Math.random() * (this.userData.length - 0 + 1)) + 0
        //we don't need this with initialize function
        // this.selectedUser = this.userData[selectedUserIndex]
        // return selectedUserIndex;
        return this.users[selectedUserIndex]
    }
    averageSteps() {
        let averageStepGoal = this.users.reduce((acc, user) => {
            return acc + user.dailyStepGoal
        }, 0);
        return Number((averageStepGoal/this.users.length).toFixed(0))
    }
    calculateAllUserAvgSleep(sleepKey) {
      // First part creates an array of arrays of all users' sleep data decided by the sleepKey argument i.e. "hoursSlept" or "sleepQuality"
      let allUsersSleep = this.users.map(user => {
        let userSleepArray = user.sleepData.map(sleepData => {
          return sleepData[sleepKey];
        })
        return userSleepArray;
      })
      // This uses the above array and iterates over each users' array, returning an array of averages for each user
      let userSleepAvgArray = [];
      allUsersSleep.forEach(userArr => {
        let userTotal = userArr.reduce((total, entry) => {
          return total += entry;
        }, 0)
        let userAvg = userTotal / userArr.length;
        userSleepAvgArray.push(userAvg);
      })
      // This part adds all the user averages together, then divides it by the total amount of users to get an average for all users
      let allUserAvgSum = userSleepAvgArray.reduce((total, userAvg) => {
        return total += userAvg;
      }, 0)
      return Number((allUserAvgSum / userSleepAvgArray.length).toFixed(1));
    }
}

export default UserRepository;