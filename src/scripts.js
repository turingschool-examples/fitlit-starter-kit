// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********
// Imports
import './css/styles.css';
import './images/turing-logo.png'
import userData from './data/users';
import UserRepository from './UserRepository';
import User from './User';

// Query Selectors
const userName = document.querySelector("#user-info-name");
const userAddress = document.querySelector("#user-info-address");
const userEmail = document.querySelector("#user-info-email");
const userStride = document.querySelector("#user-info-stride");
const userFriends = document.querySelector("#user-info-friends");
const userCard = document.querySelector("#user-info-card");
const userWelcome = document.querySelector("#nav-user-name");
const userStepsAverage = document.querySelector("#user-step-average"); // Single User
const overallStepsAverage = document.querySelector("#step-goal-average"); // All Users

// Instances
let userRepo = new UserRepository(userData);
userRepo.findUsersData(1);
userRepo.avgStepGoal();
let thisUser = userRepo.currentUser;
let user = new User(thisUser[0]);

// Event Listeners
window.addEventListener("load", loadHandler);

// Handlers 
function loadHandler() {
    displayUserCard();
    showFirstName();
    compareStepGoal();
}

// Functions
const getRandomIndex = array => {
    return Math.floor(Math.random() * array.length + 1);
};

function displayUserCard() {
    userName.innerHTML = `Name: ${user.name}`;
    userAddress.innerHTML = `Address: ${user.address}`;
    userEmail.innerHTML = `Email: ${user.email}`;
    userStride.innerHTML = `Stride: ${user.strideLength}`;
    userFriends.innerHTML = `Friends: ${user.friends}`;
}

function showFirstName() {
    userWelcome.innerHTML = `Welcome ${user.returnFirstName()}`;
};

function compareStepGoal() {
    userStepsAverage.innerHTML = `Daily Step Goal: ${user.dailyStepGoal}`;
    overallStepsAverage.innerHTML = `Overall Step Goal: ${userRepo.averageStepGoal}`;
}