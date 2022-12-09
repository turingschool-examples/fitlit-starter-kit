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
                return 
            } else {
                let user = this.findUser(sleepData.userID)
                user.sleepData.push(sleepData)
                // console.log(user.sleepData);
            }
        })
        this.users.forEach(user => {
            user.hydrationData.sort((day1,day2) => {
                return (day1.date).localeCompare(day2.date)
            })
            user.sleepData.sort((day1,day2) => {
                return (day1.date).localeCompare(day2.date)
            })
        })
        let user1 = this.users.forEach(user => console.log(user.hydrationData))
        let user2 = this.users.forEach(user => console.log(user.sleepData))
        // let sortedDates = this.hydrationData.sort((day1,day2) => {
        //      return day1.date -day2.date
        //    })
        //    console.log(sortedDates)
           // const sortLegos = () => {
           //   const copiedLegos = [...legos]
           //   return copiedLegos.sort((a,b) => 
           //   b.rating - a.rating
           // )}
           // console.log(sortLegos())
        // console.log(this.users)
        // console.log(this.users[1].sleepData)
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
        // console.log(this.users)
        // console.log(averageStepGoal)
        return Number((averageStepGoal/this.users.length).toFixed(0))
    }
    
}

export default UserRepository;