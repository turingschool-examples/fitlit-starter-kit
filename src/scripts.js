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
let lastSleep = document.getElementById('last-sleep');
let weeklySleep = document.getElementById('weekly-sleep');
let avgSleep = document.getElementById('avg-sleep');
let waterDrank = document.getElementById('water');
let weeklyWater = document.getElementById('weekly-water');
let email = document.getElementById('email');
let avgStepGoal = document.getElementById('avg-step-goal');

// window.addEventListener('load', Promise.all())

let displayedUsersID = Math.floor(Math.random() * 50);
let userRepo;
let sleepRepo;
let hydrationRepo;
let activityRepo;

Promise.all([fetchUserData(), fetchUserActivity(), fetchUserSleep(), fetchUserHydration()])
  .then(data => {
      userDataHelper(data[0].userData);
      sleepDataHelper(data[2].sleepData);
      hydrationDataHelper(data[3].hydrationData);
  });

//usually reassign to global variables


//  HELPER FUNCTIONS
function getAllUsers(userData) {
    const createUsersArray = userData.map((user) => {
        return new User(user);
    });
    return createUsersArray;
}

function userDataHelper(data) {
    const usersArray = getAllUsers(data);
    userRepo = new UserRepository(usersArray);
    displayUserInfo(userRepo.getUserById(displayedUsersID), userRepo);
}

function hydrationDataHelper(data) {
  hydrationRepo = new HydrationRepository(data);
  displayHydrationInfo(displayedUsersID, hydrationRepo);
}

function sleepDataHelper(data) {
  const sleepRepo = new SleepRepository(data);
  displaySleepInfo(displayedUsersID, sleepRepo)
}

//  DOM
function displayUserInfo(user, userRepo) {
  const getFriendsNames = user.friends.map((friend) => {
    return userRepo.getUserById(friend).name;
  });
  welcomeName.innerText = `Welcome, ${user.getUserFirstName()}`;
  stepGoal.innerText = `${user.dailyStepGoal}`;
  email.innerText = `${user.email}`;
  friends.innerText = `${getFriendsNames}`;
  avgStepGoal.innerText = `${userRepo.calculateAvgStepGoal()}`;
}

function displaySleepInfo(id, sleepRepo) {
  let allUserData = sleepRepo.getAllUserData(id);
  console.log(allUserData)
  let sleep = sleepRepo.makeNewSleep(id, allUserData);

  lastSleep.innerText = `Last Night: ${sleep.latest.hoursSlept}`
  weeklySleep.innerText = `Weekly Avg: ${sleep.calculateAvg(sleep.latest.date, "hoursSlept")}`
  avgSleep.innerText = `Average Hours Slept: ${sleep.avgHoursSlept} Average Sleep Quality: ${sleep.avgSleepQuality}`
}

function displayHydrationInfo(id, hydrationRepo) {
  const waterByWeek = hydrationRepo.getFluidOuncesEachDayOfWeek(id, "2020/01/16");
  waterDrank.innerText += `: ${hydrationRepo.getFluidOuncesByDate(id, "2020/01/22")} ounces`;
  weeklyWater.innerText += JSON.stringify(waterByWeek);
}
