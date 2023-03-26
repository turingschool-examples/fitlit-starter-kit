import mock from '../src/data/mock';

class User {
    constructor(userObj) {
        this.id =  userObj.id
        this.name = userObj.name
        this.address = userObj.address
        this.email = userObj.email
        this.strideLength = userObj.strideLength
        this.dailyStepGoal = userObj.dailyStepGoal
        this.friends = userObj.friends
    }
    getUserData(num) {
        const user = mock.users.reduce((acc, index) => {
        if (index.id === num) {
            return index
        }
            return acc
        }, {})
        return user
    }
   
}

export default User;