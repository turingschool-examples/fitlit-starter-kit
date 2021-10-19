import './css/styles.css';
import './images/turing-logo.png'
import './images/user.png'
import UserRepository from './UserRepository';
import User from './User';

import {userData, userSleepData, userActivityData, userHydrationData} from './fetch.js';

const header = document.querySelector('#header')
const activitySection = document.querySelector('#activity')

let usersData, sleepData, activityData, hydrationData;

const loadUser = () => {
  fetchCall();
}

const fetchCall = () => {
  Promise.all([userData(), userSleepData(), userActivityData(), userHydrationData()])
    .then(data => parseData(data))
};

const parseData = (data) => {
  usersData = data[0].userData;
  sleepData = data[1].sleepData;
  activityData = data[2].activityData;
  hydrationData = data[3].hydrationData;
  allData(usersData, sleepData, activityData, hydrationData)
}

const allData = (info, sleep, activity, hydration) => {
  const userRepository = new UserRepository(info);
  const randomUser = Math.floor(Math.random() * userRepository.users.length);
  const user = new User(userRepository.users[randomUser]);
  displayUserInfo(user);
  displayStepGoalComparison(user, userRepository);
};

const displayUserInfo = (user) => {
  header.innerHTML = `
    <div class='welcome-box'>
      <img src="./images/user.png" alt='user-icon' class='header header-image'>
      <h1 class='header'>Welcome, ${user.displayFirstName()}</h1>
    </div>
    <div class='header user-info'>
    <p class='header'>Name: ${user.name}<br>
    Address: ${user.address}<br>
    Email: ${user.email}</p>
    </div>
  `
}

const displayStepGoalComparison = (currentUser, allUsers) => {
  activitySection.innerHTML = `
    <h2 class='activity'>Your daily step goal is ${currentUser.dailyStepGoal}, and the average for everyone is ${allUsers.calculateAvgStepGoal()}<h2>
  `
}

window.addEventListener('load', loadUser);
