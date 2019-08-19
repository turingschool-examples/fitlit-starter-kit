class UserRepository {
    constructor(data) {
        this.data = data;

    
    }
    fetchUserData(userID) {
        return this.data.find(user => user.id === userID)
        // we have the userID that we are searching for in our data
        // we need to compare userID to the key of "id" 
        //and if it matches return the entire object --
        //that is that user
    }

    findAverageStepGoalOfAllUsers() {

        return this.data.reduce((totalSteps, user) => {
            totalSteps += user.dailyStepGoal
            return totalSteps
          }, 0) / this.data.length
        //need to add up all the users daily step goals
        //and divide that by the amount of total users. 
        // total users can be this.data.length
        //
    }
}







module.exports = UserRepository;

if (typeof module !== 'undefined') {
    module.exports = UserRepository;
  }
