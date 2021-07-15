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

let user;
let userRepo;
let hydration;
let hydrationRepo;
let sleep;
let sleepRepo;

window.addEventListener('load', function() {
  generateUser();
  setUpUserRepo();
  generateSleep();
  setUpSleepRepo();
  generateHydration();
  setUpHydrationRepo();
})

const generateUser = () => {
  fetchAPIData('users')
  .then(data => user = new User(data.userData[Math.floor(Math.random() * data.userData.length)]))
  .then(data => console.log(user))
}

const setUpUserRepo = () => {
  fetchAPIData('users')
  .then(data => userRepo = new UserRepository(data.userData))
  .then(data => userRepo = userRepo.userData)
  .then(data => console.log(userRepo))
}

const generateSleep = () => {
  fetchAPIData('sleep')
  .then(data => sleep = new Sleep(data.sleepData[user.id - 1]))
  .then(data => console.log(sleep))
}

const setUpSleepRepo = () => {
    fetchAPIData('sleep')
    .then(data => sleepRepo = new SleepRepo(data.sleepData))
    .then(data => sleepRepo = sleepRepo.sleepData)
    .then(data => console.log(sleepRepo))
  }

const generateHydration = () => {
  fetchAPIData('hydration')
  .then(data => hydration = new Hydration(data.hydrationData[user.id - 1]))
  .then(data => console.log(hydration))
}

const setUpHydrationRepo = () => {
    fetchAPIData('hydration')
    .then(data => hydrationRepo = new HydrationRepo(data.hydrationData))
    .then(data => hydrationRepo = hydrationRepo.hydrationData)
    .then(data => console.log(hydrationRepo))
  }
