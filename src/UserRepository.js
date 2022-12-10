class UserRepository {
    constructor(userData) {
        this.userData = userData
    }
    
    getUserData(id){
        return this.userData.find((user)=> user.id===id)
    }

    getFriendData(friendIDs) {
        let friendNames = []
        const friends = friendIDs.filter(e => {
                this.userData.forEach(t => {
                if(t.id === e) {
                    friendNames.push(t.name.split(' ')[0]) 
                }
            })
        })
        return friendNames 
    }

    calculateAverageStepGoal(){
        return this.userData.reduce((stepAvg, user) => {
            const result = stepAvg + user.dailyStepGoal / this.userData.length
            return +result.toFixed(2)
        },0)
    }
}

export default UserRepository;