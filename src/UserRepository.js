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
    averageStepGoal(){
        //return average
    }
}

export default UserRepository;
// module.exports = UserRepository;