// ######### Imports ###########
import userData from './data/users';
import sleepData from './data/sleepData';
import hydrationData from './data/hydrationData';
import UserRepository from './UserRepository';
import User from './User';
import Sleep from './Sleep';
import Hydration from './Hydration';

// ######### Query Selectors ###########
const userWelcome =  document.querySelector('#userName')
const userInfo = document.querySelector('#userInfo')
const userStepComp = document.querySelector('#userSteps')

// ######### Global Variables ###########
 let user 
 let userData;
// let hydrationData;
// let sleepData;




// ######### Promises ###########
//This is were our fetch (API) will go!




// ######### Event Listeners ###########
window.addEventListener('load', getPromiseData);




// ######### On-Load Function ###########

// function getRandomPageUser() {
//   const pageNameIndex = randomIndex(pageNames);
//   return pageNames[pageNameIndex];
// }

function getRandomUser() {
    currentUser = user[Math.floor(Math.random() * user.length)];
    return currentUser
}

function welcomeUser() {
  userWelcome.innerText = `${getRandomUser()} ${users.name}?`;
}


console.log(userData,"<>>>>userData")
// An example of how you tell webpack to use a CSS file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import './images/Activity.png'
console.log('This is the JavaScript entry file - your code begins here.');
console.log(sleepData)
console.log(Sleep)
