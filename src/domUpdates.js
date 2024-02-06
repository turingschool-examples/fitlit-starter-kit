// import { 
//   generateUser, 
//   getAverageStepGoal 
// } from '../scripts';

// const { generateUser, getAverageStepGoal } = require('./scripts.js');
import { generateUser, getAverageStepGoal } from './scripts'; // Adjust the path as necessary
import { users } from '../src/data/users'
// ------------- * Event Listeners *
document.addEventListener("DOMContentLoaded", () => {
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
  // Note: Assuming `users.users` is an array of user objects with `id` properties.
  // Generate a random index from 0 to users.users.length - 1
  const randomIndex = Math.floor(Math.random() * users.users.length);
  // Return the id of the randomly selected user
  console.log('randomUserId:', users.users[randomIndex].id)
  return users.users[randomIndex].id;
}


var userObject = generateUser(randomUserId()); // Note the parentheses to invoke the function


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