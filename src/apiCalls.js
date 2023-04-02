let hydration;
let activity;
let user;
let userID = 1;
// need function to generate random user
let date = "2023/03/24";
// need function to pull latest date? 
let sleep;

import UserRepository from './classes/UserRepository';
import User from './classes/User';
import Hydration from './classes/Hydration';
import Sleep from './classes/Sleep';

import {
  displayUserCard,
  displayStepUserVsAllUsers,
  displayUserGreeting,
  displayhydrationCard,
  displaySleepCard,
  displayActivityCard,
  displayFriendsList,
  displayUserCardInitial,
} from "./scripts";

import Activity from './classes/Activity';

// add new DOM manipulation functions made in scripts.js to this import object and the export object in scripts.

function fetchUsers() {
  return fetch("https://fitlit-api.herokuapp.com/api/v1/users")
    .then(response => response.json());
};

function fetchHydration() {
  return fetch("https://fitlit-api.herokuapp.com/api/v1/hydration")
    .then((response) => response.json());
};

function fetchSleep() {
  return fetch("https://fitlit-api.herokuapp.com/api/v1/sleep")
    .then((response) => response.json());
};

function fetchActivity() {
  return fetch("https://fitlit-api.herokuapp.com/api/v1/activity")
  .then((response) => response.json());
}

Promise.all([fetchUsers(), fetchHydration(), fetchSleep(), fetchActivity()])
  .then(([userData, hydrationData, sleepData, activityData]) => {
    const userBase = new UserRepository(userData.users);
    user = new User(userBase.getUser(userID));
    displayUserCard(user);
    displayStepUserVsAllUsers(user, userBase);
    displayUserGreeting(user);
    displayFriendsList(user, userBase);
    displayUserCardInitial(user);

    hydration = new Hydration(hydrationData.hydrationData);
    displayhydrationCard(hydration, userID, date);
   
    sleep = new Sleep(sleepData.sleepData);

    displaySleepCard(sleep, userID, date);

    activity = new Activity(activityData.activityData)
    displayActivityCard(activity, user, date, userID)

  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

