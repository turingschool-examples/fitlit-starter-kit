// imports here

import './images/turing-logo.png'
import './css/styles.css';
import userData from './data/users';
import User from './User'
import UserRepository from './UserRepository';

// query selectors here
const userInfoBox = document.getElementById("userInfoBox");
const userName = document.getElementById("name");
const userAddress = document.getElementById("address");
const userStrideLength = document.getElementById("strideLength");
const userDailyStepGoal = document.getElementById("dailyStepGoal");
const userEmail = document.getElementById("email");
const userFriends = document.getElementById("friends");
const userFirstName = document.getElementById("firstName");
const userStepComparison = document.getElementById("stepCompareResults");
var newRepo;

// event listeners
window.addEventListener("load", onLoad);

console.log(userData,"<>>>>userData")

console.log('This is the JavaScript entry file - your code begins here.');
// global variables
// functions
function onLoad() {
    addUser(userData[0]);
    createUserArray();
};

const createUserArray = () => {
    const userArray = userData.map(user => {
        return new User(user); 
    });
    newRepo = new UserRepository(userArray);
    // console.log(newRepo);
    return newRepo;
};

const addUser = (user) => {
    console.log(newRepo);
    const newUser = newRepo.users[0];
    // const newUserRepo = new UserRepository(newUser);
    userName.innerText = newUser.name;
    userAddress.innerText = newUser.address;
    userStrideLength.innerText = newUser.strideLength;
    userDailyStepGoal.innerText = newUser.dailyStepGoal;
    userEmail.innerText = newUser.email;
    userFirstName.innerText = `Hi ${newUser.getFirstName()}!`;
    // userStepComparison = newUser.
};

//need to call our get avg step func inside userRepo class
//we need to instantiate userRepo so we can access all the users
