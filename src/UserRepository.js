import User from "./User";

class UserRepository {
    constructor(allUserData, hydrationData, sleepData) {
        this.userData = allUserData;
        this.hydrationData = hydrationData;
        this.sleepData = sleepData;
        this.users = [];
        this.selectedUser;
    }
    initialize() {
        this.userData.forEach(user => {
            let newUser = new User(user);
            this.users.push(newUser);
        });
        this.hydrationData.forEach(hydroData => {
          if (this.findUser(hydroData.userID) === false) {
            return;
          } else {
            let user = this.findUser(hydroData.userID);
            user.hydrationData.push(hydroData);
          }
        });
        this.sleepData.forEach(sleepData => {
            if (this.findUser(sleepData.userID) === false) {
                return 
            } else {
                let user = this.findUser(sleepData.userID);
                user.sleepData.push(sleepData);
            }
        });
        this.selectedUser = this.randomizeUser();
        this.userData = null;
        this.hydrationData = null;
        this.sleepData = null;
    };

    findUser(id) {
      let userIdArray = this.users.map(user => {
        return user.id;
        })
        if (userIdArray.includes(id)) {
        return this.users.find(user => {
            return  user.id === id});
        } else {
          return false;
        }
    };

    randomizeUser() {
        let selectedUserIndex = Math.floor(Math.random() * (this.users.length));
        return this.users[selectedUserIndex];
    };

    averageSteps() {
        let averageStepGoal = this.users.reduce((acc, user) => {
            return acc + user.dailyStepGoal;
        }, 0);
        return Number((averageStepGoal/this.users.length).toFixed(0));
    };

    calculateAllUserAvgSleep(sleepKey) {
      let dataEntries = 0;
      const allUsersSleep = this.users.reduce((total, user)=> {
        user.sleepData.forEach(dataEntry => { 
          dataEntries++;
          total += dataEntry[sleepKey];
        })
        return total;
      }, 0);
      return Number((allUsersSleep / dataEntries).toFixed(1));
    }
}

export default UserRepository;