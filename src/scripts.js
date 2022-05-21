// An example of how you tell webpack to use a CSS file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

console.log('This is the JavaScript entry file - your code begins here.');

// An example of how you tell webpack to use a JS file
import {fetchUserData, fetchUserActivity, fetchUserSleep, fetchUserHydration} from './apiCalls';
import UserRepository from './UserRepository';
import SleepRepository from './sleep-repository';
import ActivityRepository from './Activity';
import HydrationRepository from './HydrationRepository';
import User from './User'

let friends = document.getElementById('friends');
let welcomeName = document.getElementById('name');
let stepGoal = document.getElementById('step-goal');
let stepsTaken = document.getElementById('steps-taken');
let minsActive = document.getElementById('mins-active');
let flights = document.getElementById('flights');
let sleep = document.getElementById('sleep');
let weeklySleep = document.getElementById('weekly-sleep');
let avgSleep = document.getElementById('.avg-sleep');
let waterDrank = document.getElementById('water');
let weeklyWater = document.getElementById('weekly-water');
let email = document.getElementById('email');
let avgStepGoal = document.getElementById('avg-step-goal');

// window.addEventListener('load', Promise.all())

let userRepo;
let sleepRepo;
let hydrationRepo;
let activityRepo;
let displayedUsersID;

Promise.all([fetchUserData(), fetchUserActivity(), fetchUserSleep(), fetchUserHydration()])
  .then(data => {
      userDataHelper(data[0].userData);
      hydrationDataHelper(data[3].hydrationData);
  });

//usually reassign to global variables

function userDataHelper(data) {
    displayedUsersID = Math.floor(Math.random() * 50);
    const usersArray = getAllUsers(data);
    userRepo = new UserRepository(usersArray);
    displayUserInfo(userRepo.getUserById(displayedUsersID), userRepo);
}

function getAllUsers(userData) {
    const createUsersArray = userData.map((user) => {
        return new User(user);
    });
    return createUsersArray;
}

function displayUserInfo(user, userRepo) {
  welcomeName.innerText = `Welcome, ${user.getUserFirstName()}`;
  stepGoal.innerText = `${user.dailyStepGoal}`;
  email.innerText = `${user.email}`;

  const getFriendsNames = user.friends.map((friend) => {
    return userRepo.getUserById(friend).name;
  });
  friends.innerText = `${getFriendsNames}`;
  avgStepGoal.innerText = `${userRepo.calculateAvgStepGoal()}`;
}

function hydrationDataHelper(data) {
  hydrationRepo = new HydrationRepository(data);
  displayHydrationInfo(displayedUsersID, hydrationRepo);
}

function displayHydrationInfo(id, hydrationRepo) {
  waterDrank.innerText += `: ${hydrationRepo.getFluidOuncesByDate(id, "2020/01/22")} ounces`;
  const waterByWeek = hydrationRepo.getFluidOuncesEachDayOfWeek(id, "2020/01/16");
  weeklyWater.innerText += JSON.stringify(waterByWeek);
}
