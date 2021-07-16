// An example of how you tell webpack to use a CSS file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

import { fetchAPIData } from './apiCalls'
import User from './User';
import UserRepository from './UserRepository';
import Hydration from './Hydration';
import HydrationRepo from './HydrationRepository';
import Sleep from './Sleep';
import SleepRepo from './SleepRepository';


// const address = document.getElementById('address');

let user;
let userRepo;
let hydration;
let hydrationRepo;
let sleep;
let sleepRepo;
let currentDate;

window.addEventListener('load', function() {
  generateUser();
  setUpUserRepo();
  generateHydration();
  setUpHydrationRepo();
  generateSleep();
  setUpSleepRepo();
})

const generateUser = () => {
  fetchAPIData('users')
  .then(data => user = new User(data.userData[Math.floor(Math.random() * data.userData.length)]))
  .then(data => console.log('userAPI', user))
  .then(data => displayUserProfile(user));
}

const setUpUserRepo = () => {
  fetchAPIData('users')
  .then(data => userRepo = new UserRepository(data.userData))
  .then(data => console.log('userRepo', userRepo))
  .then(data => displayStepGoals(userRepo, user))
}

const generateHydration = () => {
  fetchAPIData('hydration')
  .then(data => hydration = new Hydration(data.hydrationData[user.id - 1]))
  .then(data => console.log('hydrationAPI', hydration))
}

const setUpHydrationRepo = () => {
  fetchAPIData('hydration')
  .then(data => hydrationRepo = new HydrationRepo(data.hydrationData))
  .then(data => console.log('hydrationRepo', hydrationRepo))
  .then(data => findCurrentDate())
  .then(data => findDailyHydration())
  .then(data => displayHydration())
}

const generateSleep = () => {
  fetchAPIData('sleep')
  .then(data => sleep = new Sleep(data.sleepData[user.id - 1]))
  .then(data => console.log('sleepAPI', sleep))
}

const setUpSleepRepo = () => {
    fetchAPIData('sleep')
    .then(data => sleepRepo = new SleepRepo(data.sleepData))
    .then(data => console.log('sleepRepo', sleepRepo))
  }


// ON PAGE LOAD
// Display user info
  // replace innerText of all user profile info fields to reflect the current random user
 const displayUserProfile = (user) => {
  strideLength.innerText = `Stride Length: ${user.strideLength}`
  email.innerText = `Email: ${user.email}`
  stepGoal.innerText = `Step Goal: ${user.dailyStepGoal}`
  address.innerText = `Address: ${user.address}`
  displayGreeting(user);
};
//Display first name
  //Replace greeting inner text to reflect the first name of the user
    // use .returnFirstName() in user class
const displayGreeting = (user) => {
  const firstName = user.returnFirstName();
  greeting.innerText = `Hello, ${firstName}!`;
};
//Display how the specific user's step goal compares to the average step goal amongst all Users
  //
const displayStepGoals = () => {
  const userAvg = userRepo.calculateAvgStepGoal();
  stepGoal2.innerText = `Step Goal: ${user.dailyStepGoal}`
  avgSteps.innerText = `Average Steps for all users: ${userAvg}`;
};
// display how much water consumed today
  //locate the latest day
  //run through hydrationRepo & match the ID of the user & the date to the latest day

const findCurrentDate = () => {
  currentDate = hydrationRepo.hydrationData.map(hydration => hydration.date).pop();
  console.log(currentDate);
  return currentDate
};

const findDailyHydration = () => {
  return hydrationRepo.getOuncesByDate(user.id, currentDate);
}

const displayHydration = () => {
  dailyWater.innerText = `Daily water consumption ${findDailyHydration()} ounces`
}
