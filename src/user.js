class User {
    constructor(userId, userData){
        //console.log(userData.users.length)
        for(var i  = 0; i < userData.users.length; i++){
            // console.log(userData.users[i])
            //MEANT TO FIND THE CURRENT USER
            // if user input matches a user- store all of the users data in the variables
            if (userData.users[i].id === userId){
                console.log("User Found!")
                this.userId = userId
                this.userName = userData.users[i].name
                this.address = userData.users[i].address
                this.email = userData.users[i].email
                this.strideLength = userData.users[i].strideLength
                this.dailyStepGoal = userData.users[i].dailyStepGoal
                this.friends = userData.users[i].friends
            }
            else{
                console.log("User Not Found!")
            }
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