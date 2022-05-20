import { getUserDataFromAPI, getSleepDataFromAPI, getHydrationDataFromAPI} from './apiCalls.js';

// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********
//fafo 
// ///*~~~~~~~~Global Variables~~~~~~~*/
var userRepo;
const getRandomID = () => {
  return Math.floor(Math.random() * 50);
};
const userId = getRandomID();
getUserDataFromAPI().then(res => {
  setUserData(res.userData);
  console.log({userRepo});
  createUsersAverageSteps();
  const thisUser = getUserData();
  buildAttributes(thisUser);
})

const setUserData = (someData) => {
  userRepo = new UserRepository(someData); 
}



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
  
//console.log(userData,"<>>>>userData")
// An example of how you tell webpack to use a CSS file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'


// An example of how you tell webpack to use a JS file

//import userData from './data/users';

import UserRepository from './UserRepository';

