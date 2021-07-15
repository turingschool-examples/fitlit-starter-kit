// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

// import userData from './data/users';
// import hydrationTestData from './data/hydration-test-data'
import { fetchAPIData } from './apiCalls'
import User from './User';
import UserRepository from './UserRepository';
import Hydration from './Hydration';
import HydrationRepo from './HydrationRepository';
import Sleep from './Sleep';
import SleepRepo from './SleepRepository';

let user;
let userRepo;

window.addEventListener('load', function() {
  generateUser();
  setUpUserRepo();
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
