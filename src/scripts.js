// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********


// // An example of how you tell webpack to use a CSS file
// import './css/styles.css';

// // An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png';

// // An example of how you tell webpack to use a JS file
import users from './data/users';
// console.log("User Data:", userData);

// // Example of one way to import functions from the domUpdates file.  You will delete these examples.
// import { exampleFunction1, exampleFunction2 } from './domUpdates';

var usersArray = users.users

//functions

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }
// console.log('user', users)

console.log(getRandomIndex(usersArray))


const getUserDataByID = (UserID, usersArray) => {
    const userData = usersArray.find((user) => user.id === UserID)
    return userData
}

console.log('line35', getUserDataByID(getRandomIndex(usersArray), usersArray))

const randomUser = getUserDataByID(getRandomIndex(usersArray), usersArray)

// function getUserDataById(users){
//     var specificUser = users.find((user) => {
//         return user.id === 1
//     }
//     )
 
//     return specificUser
// }

// function getUserDataById(userID){
//     var user = users.find((user) => user.id === userID)
//     return user
// }

//  export default getUserDataById

 module.export = {
    getUserDataById,
 }
