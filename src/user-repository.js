// const data = require('../data/users.js');

class UserRepository {
constructor(data) {
    this.data = data; 
}
returnUserData(id) {
    return this.data.find(user => user.id === id)
}

averageStepGoal() {
    let average = this.data.map(user => {
        return user.dailyStepGoal 
    }).reduce((acc, currentValue) =>{
        return acc+=currentValue
    },0)/this.data.length;
    return Math.floor(average);

}

}



if (typeof module !== 'undefined') {
    module.exports = UserRepository;
  }