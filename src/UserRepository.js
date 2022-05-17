class UserRepository {
    constructor(data){
        this.data = data;
    }
    getUserData(id){
        const data = this.data.find((obj) => {
            if(obj.id === id){
                return obj;
            }
        })
        return data;
    }
    averageStepGoal(data){
        const average = data.reduce((sum, person) => {
            sum += person.dailyStepGoal
            return sum
        }, 0)
        return Math.round(average/data.length);
    }
}

export default UserRepository;
// module.exports = UserRepository;