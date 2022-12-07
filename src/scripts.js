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
const userFriends = document.getElementById("friends");

// event listeners
window.addEventListener("load", onLoad);

console.log(userData,"<>>>>userData")

console.log('This is the JavaScript entry file - your code begins here.');

// functions
const onLoad = () => {
    addUser(userData[0]);
};

const addUser = (user) => {
    const newUser = new User(user);
    userName.innerText += newUser.name;
};
