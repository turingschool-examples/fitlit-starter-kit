// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********
//
//
//need a function  to create repo user repo = new userrepo
// create a current user
// create window.addeventlistenr(load () => {
// ${currentuser.Name}
// })
// "id": 1,
//     "name": "Luisa Hane",
//     "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
//     "email": "Diana.Hayes1@hotmail.com",
//     "strideLength": 4.3,
//     "dailyStepGoal": 10000,
//     "friends": [
//       16,
//       4,
//       8
//     ]
//   },
// ///*~~~~~~~~Global Variables~~~~~~~*/
var userRepo = new UserRepository(userData);  
const getRandomID = () => {
    return Math.floor(Math.random() * 50);
  };
  
  const userId = getRandomID(); 


///*~~~~~~~~QUERY SELECTORS~~~~~~~*/
var userGreeting = document.querySelector("#userGreeting");
var emailAddress = document.querySelector("#emailAddress");
var stepGoal = document.querySelector("#stepGoal");
var friends = document.querySelector('#friends');
var address = document.querySelector('#address');
var strideLength = document.querySelector('#strideLength');
var averageUserGoal = document.querySelector('#averageStepGoal');
var firstName = document.querySelector('firstName');


//*~~~~~~~~Functions~~~~~~~*//
function getUserData(id){
    var thisUser = userRepo.getUserById(userId);
    return thisUser;
}
function createUsersAverageSteps() {
    averageUserGoal.innerHTML = `On average, fitlit users are walking ${userRepo.getAverageSteps()} feet.`;
}

const buildAttributes = (user) => {
    userName.innerHTML = `Name: ${user.name}`;
    emailAddress.innerHTML = `Email:${user.email}`;
    stepGoal.innerHTML = `Goal:${user.dailyStepGoal} steps`;
    friends.innerHTML = `Friends:${user.friends}`;
    address.innerHTML = `Address:${user.address}`;
    strideLength.innerHTML = `Stride Length: ${user.strideLength} steps`;
    userGreeting.innerHTML = `Welcome ${user.name.split(" ")[0]}!`;
}



//*~~~~~~~~Event Listeners~~~~~~~*//
window.addEventListener('load', (event) => {
    createUsersAverageSteps();
  });
  window.addEventListener('load', (event) => {
    const thisUser = getUserData();
    buildAttributes(thisUser);
  });

    


console.log(userData,"<>>>>userData")
// An example of how you tell webpack to use a CSS file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

console.log('This is the JavaScript entry file - your code begins here.');

// An example of how you tell webpack to use a JS file

import userData from './data/users';

import UserRepository from './UserRepository';
