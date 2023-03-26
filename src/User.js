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
    getFirstName() {
        let firstName =  this.name.split(' ')[0]
        return firstName
    }
    usersAvgDailyStep() {
        const averageSteps = mock.users.reduce((acc, index) => {
            acc += index.dailyStepGoal/mock.users.length
            return acc
        }, 0)
        return Math.round(averageSteps)
    }
}

export default User;