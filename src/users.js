class User {
    constructor(userData) {
        this.id = userData.id;
        this.name = userData.id;
        this.address = userData.id;
        this.email = userData.email;
        this.strideLength = userData.strideLength;
        this.dailyStepGoal = userData.dailyStepGoal;
        this.friends = []
    }

}

if (typeof module !== 'undefined') {
    module.exports = Users;
}