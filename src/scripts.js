import "./css/styles.css";
import "./images/turing-logo.png";
import { fetchAll } from "./apiCalls";
import User from "./User";
import UserRepository from "./UserRepository";
import Hydration from "./Hydration";
import Sleep from "./Sleep";
import { createChart, createSmallBarChart, stepGoalChart } from "./charts";

let allUserData;
let allUserSleep;
let allUserHydro;
let currentUser;
let currentDate;
let dropDownCalendar;


const userDisplay = document.querySelector("#userInfo");
const userNameDisplay = document.querySelector("#userName");
const userStepGoalAvg = document.querySelector("#stepGoalAvg");
const hydrationBox = document.querySelector("#hydration");
const displayWeekly = document.querySelector("#week");
const currentSleep = document.querySelector("#currentDaySleep");
const allTimeSleep = document.querySelector("#allTimeSleep");
const calendarBtn = document.querySelector("#calendarBtn");
const calendar = document.getElementById('myDate')

calendarBtn.addEventListener("click", function() {
  createChart(allUserHydro.returnWeeklyWaterConsumption(currentUser.id, calendar.value.replace(/-/g, '/')), allUserSleep.returnSleepQualityByWeek(currentUser.id, calendar.value.replace(/-/g, '/')), allUserSleep.returnHoursSleptByWeek(currentUser.id, calendar.value.replace(/-/g, '/')))
})

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
  calendar.setAttribute('min', allUserHydro.data.slice(0, 1)[0].date.replace(/\//g, '-'))
  calendar.setAttribute('max', currentDate.replace(/\//g, '-'))
  calendar.setAttribute('value', currentDate.replace(/\//g, '-'))
  pageLoadHandler();
});


function pageLoadHandler(event) {
  displayUserName(currentUser);
  displayUserInfo(currentUser, allUserData);
  // displayComparedStepGoal(currentUser, allUserData);
  displayCurrentDayHydration(allUserHydro, currentDate);
  // displayWeeklyInfo(allUserHydro, allUserSleep, currentDate);
  // displayCurrentDaySleep();
  // displayAllTimeSleep();
  console.log(currentUser)
  createChart(allUserHydro.returnWeeklyWaterConsumption(currentUser.id, currentDate), allUserSleep.returnSleepQualityByWeek(currentUser.id, currentDate), allUserSleep.returnHoursSleptByWeek(currentUser.id, currentDate))
  createSmallBarChart("allTimeSleep", ["Average Quality", "Average Slept"],"Avg Sleep Quality",[allUserSleep.calcAvgSleepQualityPerDay(currentUser.id), allUserSleep.calcAvgSleepPerDay(currentUser.id)], ["rgba(255, 243, 199, .2)", "rgba(186, 239, 195, .2)"], ["rgb(255, 243, 199)", "rgb(186, 239, 195)"])
  createSmallBarChart("dailySleep", ["Daily Quality", "Daily Slept"], "Daily Sleep",[allUserSleep.returnSleepQualityByDate(currentUser.id, currentDate), allUserSleep.returnHoursSleptByDate(currentUser.id, currentDate)], ["rgba(255, 243, 199, .2)", "rgba(186, 239, 195, .2)"], ["rgb(255, 243, 199)", "rgb(186, 239, 195)"])
  createSmallBarChart("stepGoalAvg", ["My Step Goal", "Average Step Goal"], 'nope',[currentUser.dailyStepGoal, allUserData.calculateAverageStepGoal()], ["rgba(253, 221, 224, .2)"],["rgb(253, 221, 224)"], 'y')
  // dropDownCalendar = document.getElementById('myDate').value
  // console.log(dropDownCalendar)
}



const displayUserName = function (user) {
  userNameDisplay.innerText = `Welcome, ${user.getFirstName()}!`;
};

const displayUserInfo = function (user, repository) {
  userDisplay.innerHTML = `
  <div class="user-card">
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
  <i class="fa-regular fa-glass fa-2xl"></i>
  <p>Today's Water: ${hydration.consumeBydate(currentUser.id, date)} oz</p>`;
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





