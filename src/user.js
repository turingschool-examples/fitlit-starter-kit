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
    // console.log('here', this.userId)
    }
}

        
    
//MEANT TO FIND THE RANDOM USER
 // if user input matches a user- store all of the users data in the variables


findUserById(userId,userData){
    for(var i  = 0; i < userData.users.length; i++){
        
    if (userData.users[i].id === userId){
        console.log(`User ${userData.users[i].name} Found By ID!`)
        this.userId = userData.users[i].id
        this.userName = userData.users[i].name
        this.address = userData.users[i].address
        this.email = userData.users[i].email
        this.strideLength = userData.users[i].strideLength
        this.dailyStepGoal = userData.users[i].dailyStepGoal
        this.friends = userData.users[i].friends
        return 
            
        } else {     
        }
    }
    }
    //MEANT TO FIND THE SELECTED USER
    // if user input matches a user- store all of the users data in the variables

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
        }
        else{
    
        }
        }
        if(!(nameArr === "")){
            console.log(`User First Name :${nameArr[0]} Found By ID!`)
            return nameArr[0]
        }
        else{
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










/*
Iteration 1 Classes :### 
Class - allUsers 
constructor (userData) 
properties 
- A place holds onto all of the user data objects 
- hold list of user objects method - 

findUserByID = return userID object 
- findOverAllStepGoal 
- randomUserID 

### **
Class SingleUser (needed to store info for random gen user?)

** constructor (UserObject) 
properties id name address email strideLength dailyStepGoal 

UserFriends methods 
`userFirstName()` `findToday()` the most recent day
*/

//console.log("User Data:", userData);

// //Get Random user by refrencing the class
// const currentUser = new User(userData);
// //Get Current user First Name
// currentUser.userFirstName()

// //Change The Current User By ID
// currentUser.findUserById(1,userData)
// //Get Current user First Name
// currentUser.userFirstName()

// //Get overall Step goal
// currentUser.findOverAllStepGoal(userData)
// //Get user Step Goal
// currentUser.dailyStepGoal

// //Get First Name by ID
// currentUser.userFirstNameById(49,userData)