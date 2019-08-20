const sampleData = require('../test/sample-data.js')
const data = require('../data/users.js');

class UserRepository {
constructor(data) {
    this.data = data; 
}
returnUserData(id) {
    // return this.data.find( user => {
    //     if (this.id === id) {
    //         return user;
    //     }
    // })
    return this.data.find(user => user.id === id)
};
    averageStepGoal(){

    }

}



if (typeof module !== 'undefined') {
    module.exports = UserRepository;
  }