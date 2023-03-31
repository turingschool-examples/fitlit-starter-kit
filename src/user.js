class User {
  constructor(userData) {
    const randomUser = Math.floor(Math.random() * 49);
    this.userId = 1;
    this.userName = 'John Doe';
    this.address = '123 Main St';
    this.email = 'johndoe@example.com';
    this.strideLength = 2.5;
    this.dailyStepGoal =10000;
    this.friends = [2, 3];

    const randomUserObj = userData.users.find(user => user.id === randomUser);
    if (randomUserObj) {
    this.userId = randomUserObj.id
    this.userName = randomUserObj.name
    this.address = randomUserObj.address
    this.email = randomUserObj.email
    this.strideLength = randomUserObj.strideLength
    this.dailyStepGoal = randomUserObj.dailyStepGoal
    this.friends = randomUserObj.friends
    }
}

    findUserById(userId, userData) {
        const user = userData.users.find(user => user.id === userId);
        if (user) {
        console.log(`User ${user.name} Found By ID!`);
        this.userId = user.id;
        this.userName = user.name;
        this.address = user.address;
        this.email = user.email;
        this.strideLength = user.strideLength;
        this.dailyStepGoal = user.dailyStepGoal;
        this.friends = user.friends;
        return;
        }
    }

    findOverAllStepGoalAvg(userData) {
        const sum = userData.users.reduce((acc, user) => acc + user.dailyStepGoal, 0);
        const average = sum / userData.users.length;
        return average;
    }
    
    userFirstName(){
        const nameArr = this.userName.split(" ")
        console.log(nameArr[0])
        return nameArr[0]
    }

    userFirstNameById(userId,userData){
        let nameArr = ""
        for(var i  = 0; i < userData.users.length; i++){
        if (userData.users[i].id === userId){
            const name = userData.users[i].name
            nameArr = name.split(" ")
        } else {

        }
    }
        if(!(nameArr === "")){
            console.log(`User First Name :${nameArr[0]} Found By ID!`)
            return nameArr[0]
        } else {
            console.log("User Not Found!")
            return ""
        }
    }
    
    generateRandomUser(userData) {
        const randomUser = Math.floor(Math.random() * 49);
        const user = userData.users.find(user => user.id === randomUser);
        if (user) {
            console.log(`Random User ${user.name} Found!`);
            const { id, name, address, email, strideLength, dailyStepGoal, friends } = user;
            this.userId = id;
            this.userName = name;
            this.address = address;
            this.email = email;
            this.strideLength = strideLength;
            this.dailyStepGoal = dailyStepGoal;
            this.friends = friends;
        }
    }

}
export default User
