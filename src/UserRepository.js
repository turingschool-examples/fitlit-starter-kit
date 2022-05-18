import User from '../src/User';

class UserRepository {
  constructor(data) {
    this.users = data.map((userObj) => { return new User(userObj) });
  }

  // we should create a getAllUsers method that will return this.users array so we have access to this array

    getUser(id){
        const data = this.users.find((obj) => {
            if(obj.id === id){
                return obj;
            }
        })
        return data;
    }

    averageStepGoal(){
        const average = this.users.reduce((sum, person) => {
            sum += person.dailyStepGoal
            return sum
        }, 0)
        return Math.round(average/this.users.length);
    }
}

export default UserRepository;
