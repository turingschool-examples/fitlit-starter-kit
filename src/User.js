class User {
    constructor(user){
        this.id = user.id;
        this.address = user.address;
        this.name = user.name;
        this.email = user.email;
        this.strideLength = user.strideLength;
        this.dailyStepGoal = user.dailyStepGoal;
        this.friends = user.friends;
    }

getFirstName() {
 return this.name.split(' ')[0];   
}

}

module.exports = User;