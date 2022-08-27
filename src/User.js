class User {
    constructor(userData){
        this.id= userData.id
        this.name= userData.name
        this.address= userData.address
        this.email= userData.email
        this.strideLength= userData.strideLength
        this.dailyStepGoal= userData.dailyStepGoal
        this.friends= userData.friends
    }
    
    getFirstName(){
        let firstName = this.name.split(" ")
        console.log(firstName);
        return firstName[0]
        
    }
}

module.exports = User;
