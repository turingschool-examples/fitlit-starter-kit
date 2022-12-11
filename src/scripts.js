// imports 👇🏻

import "./images/turing-logo.png";
import "./css/styles.css";
import User from "./User";
import UserRepository from "./UserRepository";
import Sleep from "./Sleep";
import { fetchUserData } from "./apiCalls";
import { fetchSleepData } from "./apiCalls";
import { fetchHydrationData } from "./apiCalls";
import { buildSleepChart } from "./Chart";

// query selectors 👇🏻

const userInfoBox = document.getElementById("userInfoBox");
const userName = document.getElementById("name");
const userAddress = document.getElementById("address");
const userStrideLength = document.getElementById("strideLength");
const userDailyStepGoal = document.getElementById("dailyStepGoal");
const userEmail = document.getElementById("email");
const userFirstName = document.getElementById("firstName");
const userStepComparison = document.getElementById("stepCompareResults");
const dailySleepHours = document.getElementById("dailySleepHours");
const weeklySleepHours = document.getElementById("weeklySleepHours");
const dailySleepQuality = document.getElementById("dailySleepQuality");
const weeklySleepQuality = document.getElementById("weeklySleepQuality");
const avgSleepData = document.getElementById("avgSleepData");

// global variables 👇🏻

let newRepo;
let aNewUser;
let userId = 1;
let usersAvgSteps;
let userData;
let hydrationData;
let sleepData;
let userSleepData;

// event listeners 👇🏻

// functions 👇🏻

Promise.all([fetchUserData(), fetchSleepData(), fetchHydrationData()]).then(
  (data) => {
    // console.log(data)
    userData = data[0].userData;
    sleepData = data[1].sleepData;
    hydrationData = data[2].hydrationData;
    instantiateSleep(sleepData);
    onLoad(userData);
  }
);

function onLoad() {
  addUser();
  displayDailySleep();
  displayWeeklySleep();
  displayWeeklySleepQuality();
  displayAvgAllTime();
  displaySleepChart();
}

const createUserArray = (userData) => {
  newRepo = new UserRepository(userData);
  usersAvgSteps = newRepo.avgStepGoal();
  userStepComparison.innerText = `${usersAvgSteps} steps`;
  return newRepo;
};

function createNewUser() {
  createUserArray(userData);
  const userObject = newRepo.getUserData(userId);
  aNewUser = new User(userObject);
  return aNewUser;
}

const addUser = () => {
  createNewUser(userData);
  userName.innerText = aNewUser.name;
  userAddress.innerText = aNewUser.address;
  userStrideLength.innerText = aNewUser.strideLength;
  userDailyStepGoal.innerText = aNewUser.dailyStepGoal;
  userEmail.innerText = aNewUser.email;
  userFirstName.innerText = `Hi ${aNewUser.getFirstName()}!`;
};

const instantiateSleep = () => {
  userSleepData = new Sleep(sleepData);
  return userSleepData;
};

const displayDailySleep = () => {
  let user1 = userSleepData.getUserData(1).reverse();
  let lastNightDate = user1[0].date;
  dailySleepHours.innerText = `Hours slept last night: ${userSleepData.getHoursSleptOnDay(
    1,
    lastNightDate
  )}`;
  dailySleepQuality.innerText = `Sleep quality last night: ${userSleepData.getSleepQualityOnDay(
    1,
    lastNightDate
  )}`;
};

const displayWeeklySleep = () => {
  const user = userSleepData.getUserData(1).slice(-7);
  weeklySleepHours.innerHTML = `              
    <h4>hours slept last 6 days
        <div id="day1">Day 1: ${user[6].hoursSlept} hours</div>
        <div id="day2">Day 2: ${user[5].hoursSlept} hours</div>
        <div id="day3">Day 3: ${user[4].hoursSlept} hours</div>
        <div id="day4">Day 4: ${user[3].hoursSlept} hours</div>
        <div id="day5">Day 5: ${user[2].hoursSlept} hours</div>
        <div id="day6">Day 6: ${user[1].hoursSlept} hours</div>
    </h4>`;
};

const displayWeeklySleepQuality = () => {
  const user = userSleepData.getUserData(1).slice(-7);
  weeklySleepQuality.innerHTML = `              
    <h4>sleep quality last 6 days
        <div id="day1">Day 1: ${user[6].sleepQuality}</div>
        <div id="day2">Day 2: ${user[5].sleepQuality}</div>
        <div id="day3">Day 3: ${user[4].sleepQuality}</div>
        <div id="day4">Day 4: ${user[3].sleepQuality}</div>
        <div id="day5">Day 5: ${user[2].sleepQuality}</div>
        <div id="day6">Day 6: ${user[1].sleepQuality}</div>
    </h4>`;
};

const displayAvgAllTime = () => {
  const avgAllSleepQuality = userSleepData.avgSleepQuality(1);
  const avgAllSleepHours = userSleepData.avgHoursSleptPerDay(1);
  avgSleepData.innerHTML = `
    <div id="compareSleepQual">Average all-time sleep quality: ${avgAllSleepQuality}</div>
    <div id="compareSleepHours">Average all-time hours slept: ${avgAllSleepHours}</div>
    `;
};

const displaySleepChart = () => {
  const usersSleepOverWeek = userSleepData.getUserData(1).slice(-7);
  buildSleepChart(usersSleepOverWeek);
};
