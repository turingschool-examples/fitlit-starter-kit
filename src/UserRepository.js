class UserRepository{
    constructor(userData) {
        this.userData = userData;
        this.currentUser;
    }

    returnCurrentUser(id) {
    this.currentUser = this.userData.find(user => {
            return user.id === id
        })
    }

    returnCurrentUserFriends() {
        this.currentUserFriends = this.currentUser.friends;
        return this.currentUserFriends;
        }

    calculateAvgStepGoalAllUsers() {
        let stepGoal = this.userData.reduce((acc,user) => {
            acc += user.dailyStepGoal
            return acc
        }, 0) / this.userData.length
        return Math.round(stepGoal)
    }    
}

if (typeof module !== 'undefined') {
    module.exports = UserRepository;
  };