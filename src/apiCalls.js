import UserRepository from './classes/UserRepository';
import Hydration from './classes/Hydration';
import Sleep from './classes/Sleep';
import Activity from './classes/Activity';
import dayjs from 'dayjs';

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

let user;
let hydration;
let activity;
let sleep;
let date = dayjs().format("YYYY/MM/DD");


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
    user = userBase.getRandomUser();
    displayUserCard(user);
    displayStepUserVsAllUsers(user, userBase);
    displayUserGreeting(user, date);
    displayFriendsList(user, userBase);
    displayUserCardInitial(user);

    hydration = new Hydration(hydrationData.hydrationData);
    displayhydrationCard(hydration, user.id, date);
   
    sleep = new Sleep(sleepData.sleepData);

    displaySleepCard(sleep, user.id, date);

    activity = new Activity(activityData.activityData)
    displayActivityCard(activity, user, date, user.id)

  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

