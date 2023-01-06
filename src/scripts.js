import "./css/styles.css";
import "./images/fitlit_logo_h.png";
import { fetchAll } from "./apiCalls";
import User from "./User";
import UserRepository from "./UserRepository";
import Hydration from "./Hydration";
import Sleep from "./Sleep";
import * as dayjs from "dayjs"
import { createChart, createSmallBarChart } from "./charts";
import Activity from "./Activity";

let allUserData;
let allUserSleep;
let allUserHydro;
let allUserActivity;
let currentUser;
let currentDate;
let calendarMax;
let calendarMin;

const userDisplay = document.querySelector("#userInfo");
const userNameDisplay = document.querySelector("#userName");
const hydrationBox = document.querySelector("#hydration");
const calendarBtn = document.querySelector("#calendarBtn");
const calendar = document.getElementById("myDate");

calendarBtn.addEventListener("click", function () {
  const time = new Date(calendar.value).getTime()
  if( time < new Date(calendarMin).getTime() || time > new Date(calendarMax).getTime()) {
    return
  }
  createChart(
    allUserHydro.returnWeeklyWaterConsumption(
      currentUser.id,
      calendar.value.replace(/-/g, "/")
    ),
    allUserSleep.returnSleepQualityByWeek(
      currentUser.id,
      calendar.value.replace(/-/g, "/")
    ),
    allUserSleep.returnHoursSleptByWeek(
      currentUser.id,
      calendar.value.replace(/-/g, "/")
    )
  );
});

fetchAll().then((data) => {
  allUserData = new UserRepository(
    data[0].userData.map((user) => new User(user))
  );
  allUserSleep = new Sleep(formatDates(data[1].sleepData).sort((high, low) => low.date - high.date));
  console.log(allUserSleep.sleepData)
  allUserHydro = new Hydration(formatDates(data[2].hydrationData));
  allUserActivity = new Activity(formatDates(data[3].activityData))
  currentUser =
    allUserData.userData[
      Math.floor(Math.random() * allUserData.userData.length)
    ];
  currentDate = allUserHydro.data.slice(-1)[0].date;
  calendarMin = allUserHydro.data.slice(0, 1)[0].date.replace(/\//g, "-")
  calendarMax = currentDate.replace(/\//g, "-")
  calendar.setAttribute(
    "min",
    calendarMin
  );
  calendar.setAttribute("max", calendarMax);
  calendar.setAttribute("value", currentDate.replace(/\//g, "-"));
  pageLoadHandler();
});

function pageLoadHandler() {
  displayUserName(currentUser);
  displayUserInfo(currentUser, allUserData);
  displayCurrentDayHydration(allUserHydro, currentDate);
  createChart(
    allUserHydro.returnWeeklyWaterConsumption(currentUser.id, currentDate),
    allUserSleep.returnSleepQualityByWeek(currentUser.id, currentDate),
    allUserSleep.returnHoursSleptByWeek(currentUser.id, currentDate)
  );
  createSmallBarChart(
    "allTimeSleep",
    ["Average Quality", "Average Slept"],
    "Avg Sleep Quality",
    [
      allUserSleep.calcAvgSleepQualityPerDay(currentUser.id),
      allUserSleep.calcAvgSleepPerDay(currentUser.id),
    ],
    ["rgba(255, 243, 199, .2)", "rgba(186, 239, 195, .2)"],
    ["rgb(255, 243, 199)", "rgb(186, 239, 195)"]
  );
  createSmallBarChart(
    "dailySleep",
    ["Daily Quality", "Daily Slept"],
    "Daily Sleep",
    [
      allUserSleep.returnSleepQualityByDate(currentUser.id, currentDate),
      allUserSleep.returnHoursSleptByDate(currentUser.id, currentDate),
    ],
    ["rgba(255, 243, 199, .2)", "rgba(186, 239, 195, .2)"],
    ["rgb(255, 243, 199)", "rgb(186, 239, 195)"]
  );
  createSmallBarChart(
    "stepGoalAvg",
    ["My Step Goal", "Average Step Goal"],
    "Steps",
    [currentUser.dailyStepGoal, allUserData.calculateAverageStepGoal()],
    ["rgba(253, 221, 224, .2)"],
    ["rgb(253, 221, 224)"],
    "y",
    false
  );
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

const displayCurrentDayHydration = function (hydration, date) {
  hydrationBox.innerHTML = `
  <i class="fa-regular fa-glass fa-2xl"></i>
  <p>Today's Water: ${hydration.consumeBydate(currentUser.id, date)} oz</p>`;
};

function formatDates(array) {
  return array.map(user => {
    return {
    ...user,
      date: dayjs(user.date).format("YYYY/MM/DD")
    }
  })
}