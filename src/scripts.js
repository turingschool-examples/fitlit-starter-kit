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
const userStepsAverage = document.querySelector("#user-step-average"); // Single User
const overallStepsAverage = document.querySelector("#step-goal-average"); // All Users

// Instances
let user = new User();

// Event Listeners
window.addEventListener("load", displayUserCard);

// Functions
const getRandomIndex = array => {
    return Math.floor(Math.random() * array.length + 1);
};

// dislayUserCard()

// showFirstName()

// compareStepGoal()