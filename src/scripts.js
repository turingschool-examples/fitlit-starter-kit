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
import { testSequentialDates, userDataForID } from "./helperFunctions"

let allUserData;
let allUserSleep;
let allUserHydro;
let allUserActivity;
let currentUser;
let currentDate;
let weekStartDate
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
  allUserSleep = new Sleep(formatDates(data[1].sleepData).sort((high, low) => dayjs(high.date).diff(dayjs(low.date))));
  allUserHydro = new Hydration(formatDates(data[2].hydrationData).sort((high, low) => dayjs(high.date).diff(dayjs(low.date))));
  allUserActivity = new Activity(formatDates(data[3].activityData).sort((high, low) => dayjs(high.date).diff(dayjs(low.date))))
  currentUser =
    allUserData.userData[
      Math.floor(Math.random() * allUserData.userData.length)
    ];
  currentDate = currentDateForUser()
  weekStartDate = dayjs(currentDate).subtract(6, 'day').format("YYYY/MM/DD")
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
    allUserHydro.returnWeeklyWaterConsumption(currentUser.id, weekStartDate),
    allUserSleep.returnSleepQualityByWeek(currentUser.id, weekStartDate),
    allUserSleep.returnHoursSleptByWeek(currentUser.id, weekStartDate),
    allUserActivity.averageMinutesActiveForWeek(currentUser.id, weekStartDate)
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
  const weekStepChartData = allUserActivity.weeklyStepCountByDay(currentUser.id, weekStartDate)
  createSmallBarChart(
    "weekStepChart",
    weekStepChartData.dates,
    "Weekly Steps",
    weekStepChartData.count,
    ["rgba(255, 243, 199, .2)"],
    ["rgb(255, 243, 199)"]
  );
  const weekActiveChartData = allUserActivity.weeklyMinutesActiveByDay(currentUser.id, weekStartDate)
  createSmallBarChart(
    "weekMinutesActiveChart",
    weekActiveChartData.dates,
    "Weekly Activity",
    weekActiveChartData.count,
    ["rgba(255, 243, 199, .2)"],
    ["rgb(255, 243, 199)"]
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

function currentDateForUser() {
  const hydroData = userDataForID(currentUser.id, allUserHydro.data).slice(-1)[0].date
  const sleepData = userDataForID(currentUser.id, allUserSleep.sleepData).slice(-1)[0].date
  const activityData = userDataForID(currentUser.id, allUserActivity.data).slice(-1)[0].date
  const mostCurrent = [hydroData, sleepData, activityData].sort((low, high) => dayjs(low).diff(dayjs(high)))
  return mostCurrent[mostCurrent.length -1]
}