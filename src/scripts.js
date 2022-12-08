// imports here
import './images/turing-logo.png'
import './css/styles.css';
// import userData from './data/users';
import User from './User'
import UserRepository from './UserRepository';
// import userData from './apiCalls';
import {fetchReqeuest} from './apiCalls'


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
let newRepo;
let aNewUser;
let userId = 1;
let usersAvgSteps;
let userData


// event listeners
window.addEventListener("load", onLoad);

// logs
// console.log(userData,"<>>>>userData")
console.log('This is the JavaScript entry file - your code begins here.');

// functions:

// access the promise HERE and run anything we want to do before we actually get the data 
fetchReqeuest()
    .then(response => response.json())
    .then(data => {
        console.log("data: ", data)
        userData = data.userData
        console.log("inside of function: ", userData)
        onLoad(userData)
        createUserArray(userData)
    })

setTimeout(() => {
    console.log(userData)
}, 3000) 

function onLoad(userData) {
    addUser();
    createUserArray(userData);
    console.log(userData)
};

const createUserArray = (userData) => {
    newRepo = new UserRepository(userData);
    usersAvgSteps = newRepo.avgStepGoal()
    userStepComparison.innerText = `${usersAvgSteps} steps`
    return newRepo
};

function createNewUser(userData) {
    createUserArray(userData)
    const userObject = newRepo.getUserData(userId);
    aNewUser = new User(userObject);
    return aNewUser;
}

const addUser = () => {
    createNewUser(userData);
    // console.log(aNewUser);
    userName.innerText = aNewUser.name;
    userAddress.innerText = aNewUser.address;
    userStrideLength.innerText = aNewUser.strideLength;
    userDailyStepGoal.innerText = aNewUser.dailyStepGoal;
    userEmail.innerText = aNewUser.email;
    userFirstName.innerText = `Hi ${aNewUser.getFirstName()}!`;
};