class UserRepository {
    constructor(userData) {
        this.userData = userData
    }
    
    getUserData(id){
        return this.userData.find((user)=> user.id===id)
    }
    calculateAverageStepGoal(){
        return this.userData.reduce((stepAvg, user) => {
            const result = stepAvg + user.dailyStepGoal / this.userData.length
            return +result.toFixed(2)
        },0)
    }
}

export default UserRepository;