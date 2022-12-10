import "./css/styles.css";
import "./images/turing-logo.png";
import { fetchAll } from "./apiCalls";
import User from "./User";
import UserRepository from "./UserRepository";
import Hydration from "./Hydration";
import Sleep from "./Sleep";
import { createChart, sleepChart, stepGoalChart } from "./charts";

let allUserData;
let allUserSleep;
let allUserHydro;
let currentUser;
let currentDate;

const userDisplay = document.querySelector("#userInfo");
const userNameDisplay = document.querySelector("#userName");
const userStepGoalAvg = document.querySelector("#stepGoalAvg");
const hydrationBox = document.querySelector("#hydration");
const displayWeekly = document.querySelector("#week");
const currentSleep = document.querySelector("#currentDaySleep");
const allTimeSleep = document.querySelector("#allTimeSleep");

fetchAll().then((data) => {
  console.log(data);
  allUserData = new UserRepository(
    data[0].userData.map((user) => new User(user))
  );
  allUserSleep = new Sleep(data[1].sleepData);
  allUserHydro = new Hydration(data[2].hydrationData);
  // currentUser = allUserData.userData[0];
  console.log(Math.floor(Math.random() * allUserData.userData.length))
  currentUser = allUserData.userData[Math.floor(Math.random() * allUserData.userData.length)];
  console.log(allUserHydro);
  currentDate = allUserHydro.data.slice(-1)[0].date;
  pageLoadHandler();
});

function pageLoadHandler() {
  displayUserName(currentUser);
  displayUserInfo(currentUser, allUserData);
  // displayComparedStepGoal(currentUser, allUserData);
  displayCurrentDayHydration(allUserHydro, currentDate);
  // displayWeeklyInfo(allUserHydro, allUserSleep, currentDate);
  // displayCurrentDaySleep();
  // displayAllTimeSleep();
  createChart(allUserHydro.returnWeeklyWaterConsumption(currentUser.id, currentDate), allUserSleep.returnSleepQualityByWeek(currentUser.id, currentDate), allUserSleep.returnHoursSleptByWeek(currentUser.id, currentDate))
  sleepChart(allUserSleep.returnHoursSleptByDate(currentUser.id, currentDate), allUserSleep.calcAvgSleepQualityPerDay(currentUser.id), allUserSleep.calcAvgSleepPerDay(currentUser.id))
  stepGoalChart(currentUser.dailyStepGoal, allUserData.calculateAverageStepGoal())
}

const displayUserName = function (user) {
  userNameDisplay.innerText = `Welcome, ${user.getFirstName()}!`;
};

const displayUserInfo = function (user, repository) {
  console.log(user)
  userDisplay.innerHTML = `
  <div>
    <p class="id">User ID: ${user.id}</p>
    <p class="name">Name: ${user.name}</p>
    <p class="address">Address: ${user.address}</p>
    <p class="email">Email: ${user.email}</p>
    <p class="daily-step-goal">Step Goal: ${user.dailyStepGoal}</p>
    <p class="stride-length">Stride Length: ${user.strideLength}</p>
    <p class="friends">Friends: ${repository.getFriendData(user.friends)}</p>
  </div>`;
};

const displayComparedStepGoal = function (user, repository) {
  userStepGoalAvg.innerHTML = `<p>Daily step goal: ${
    user.dailyStepGoal
  } Step goal average:${repository.calculateAverageStepGoal()}</p>`;
};

const displayCurrentDayHydration = function (hydration, date) {
  hydrationBox.innerHTML = `
  <p>Current Water: ${hydration.consumeBydate(currentUser.id, date)}</p>`;
};

const displayWeeklyInfo = function (hydration, sleep, date) {
  displayWeekly.innerHTML = `
  <p>Water: ${hydration.returnWeeklyWaterConsumption(currentUser.id, date)}</p>
  <p>Sleep Hours: ${sleep.returnHoursSleptByWeek(currentUser.id, date)} </p>
  <p>Sleep Quality: ${sleep.returnSleepQualityByWeek(currentUser.id, date)} </p>
  `;
};

const displayCurrentDaySleep = function () {
  currentSleep.innerHTML = `<p>Current Sleep: ${allUserSleep.returnHoursSleptByDate(
    currentUser.id,
    currentDate
  )}</p>`;
};

const displayAllTimeSleep = function () {
  allTimeSleep.innerHTML = `
  <p>Sleep Quality avg all time: ${allUserSleep.calcAvgSleepQualityPerDay(
    currentUser.id
  )}</p>
  <p>Sleep hour avg all time: ${allUserSleep.calcAvgSleepPerDay(
    currentUser.id
  )}</p>
  `;
};
