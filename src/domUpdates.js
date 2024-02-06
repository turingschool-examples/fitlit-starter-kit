// import { 
//   generateUser, 
//   getAverageStepGoal 
// } from '../scripts';

// const { generateUser, getAverageStepGoal } = require('./scripts.js');
import { generateUser, getAverageStepGoal } from './scripts'; // Adjust the path as necessary
import users from './data/users'
console.log('domUpdates:', users)

// ------------- * Event Listeners *
document.addEventListener("DOMContentLoaded", () => {
  console.log("userObject:", userObject)
  console.log("generateUser:", generateUser(30))
  displayWelcomeMessage(userObject)
  
  // displayUserInfo(userObject)
  // compareStepGoal(userObject)
})

// function userInfoToDom() {
//  const randomUsers = users.users[Math.floor(Math.random() * users.users.length) + 1];
//  console.log(randomUsers)
// }

// var randomUserId = () => {
//  users.users[Math.floor(Math.random() * users.users.length) + 1];
// }

var randomUserId = () => {
  const randomIndex = Math.floor(Math.random() * users.users.length);
  console.log(randomIndex)
  console.log('randomUserId:', users.users[randomIndex].id)
  // return users.users[randomIndex].id;
  return 30;
}


var userObject = generateUser(30); // Note the parentheses to invoke the function

//function displayUserInfo(user)

function displayWelcomeMessage(user) {
  console.log("name should be replaced, is this invoked?")
  const firstName = user.name.split(' ')[0];
  const welcomeMessageElement = document.getElementById('welcomeMessage')
  welcomeMessageElement.innerText = `Welcome Back, ${firstName}!`
}




export {
  randomUserId,
  displayWelcomeMessage,
}

// generate random user id
// find user object w id

// display user info uses inner text to change the welcome message 



// 