import "./css/styles.css";
import "./images/fitlit_logo_h.png";
import { fetchAll, postData } from "./apiCalls";
import User from "./User";
import UserRepository from "./UserRepository";
import Hydration from "./Hydration";
import Sleep from "./Sleep";
import * as dayjs from "dayjs";
import { createChart, createSmallBarChart } from "./charts";
import Activity from "./Activity";
import { userDataForID, userDataForDate } from "./helperFunctions";

let allUserData;
let allUserSleep;
let allUserHydro;
let allUserActivity;
let currentUser;
let currentDate;
let weekStartDate;
let calendarMax;
let calendarMin;

const userDisplay = document.querySelector("#userInfo");
const userNameLogo = document.querySelector("#userWelcome");
const hydrationBox = document.querySelector("#hydration");
const calendarBtn = document.querySelector("#calendarBtn");
const calendar = document.getElementById("myDate");
const stepsInput = document.querySelector("#todaySteps");
const stairsInput = document.querySelector("#todayStairs");
const activityInput = document.querySelector("#todayActivity");
const sleepQualityInput = document.querySelector("#todaySleepQuality");
const sleepHoursInput = document.querySelector("#todaySleepHours");
const hydrationInput = document.querySelector("#todayHydration");
const submitErrorMessage = document.querySelector("#submitError");
const inputButton = document.querySelector("#inputButton");
const main = document.querySelector('#main')

calendarBtn.addEventListener("click", function () {
  const time = new Date(calendar.value).getTime();
  if (
    time < new Date(calendarMin).getTime() ||
    time > new Date(calendarMax).getTime()
  ) {
    return;
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
  const weekStepChartData = allUserActivity.weeklyStepCountByDay(
    currentUser.id,
    calendar.value.replace(/-/g, "/")
  );
  createSmallBarChart(
    "weekStepChart",
    weekStepChartData.dates,
    "Weekly Steps",
    weekStepChartData.count,
    ["rgba(215, 199, 255, .2)"],
    ["rgb(215, 199, 255)"]
  );
  const weekActiveChartData = allUserActivity.weeklyMinutesActiveByDay(
    currentUser.id,
    calendar.value.replace(/-/g, "/")
  );
  createSmallBarChart(
    "weekMinutesActiveChart",
    weekActiveChartData.dates,
    "Weekly Activity",
    weekActiveChartData.count,
    ["rgba(255, 199, 211, .2)"],
    ["rgb(255, 199, 211)"]
  );
  const weekStairsChartData = allUserActivity.weeklyStairsClimbedByDay(
    currentUser.id,
    calendar.value.replace(/-/g, "/")
  );
  createSmallBarChart(
    "weekStairChart",
    weekStairsChartData.dates,
    "Weekly Stairs",
    weekStairsChartData.count,
    ["rgba(199, 239, 255, .2)"],
    ["rgb(199, 239, 255)"]
  );
});

inputButton.addEventListener("click", function (event) {
  submitErrorMessage.innerHTML = ``;
  submitFormHandler(event);
});

fetchAll()
  .then((data) => {
    updateDataModel(data);
    pageRender();
  })
  .catch((error) => {
    main.innerHTML = `
    <h2 class="fetch-error">**${error.message}**</h2>
    `
  });

function updateDataModel(data, user) {
  allUserData = new UserRepository(
    data[0].userData.map((user) => new User(user))
  );
  allUserSleep = new Sleep(
    formatDates(data[1].sleepData).sort((high, low) =>
      dayjs(high.date).diff(dayjs(low.date))
    )
  );
  allUserHydro = new Hydration(
    formatDates(data[2].hydrationData).sort((high, low) =>
      dayjs(high.date).diff(dayjs(low.date))
    )
  );
  allUserActivity = new Activity(
    formatDates(data[3].activityData).sort((high, low) =>
      dayjs(high.date).diff(dayjs(low.date))
    )
  );
  currentUser =
    user ||
    allUserData.userData[
      Math.floor(Math.random() * allUserData.userData.length)
    ];
  currentDate = currentDateForUser();
  weekStartDate = dayjs(currentDate).subtract(6, "day").format("YYYY/MM/DD");
  calendarMin = allUserHydro.data.slice(0, 1)[0].date.replace(/\//g, "-");
  calendarMax = currentDate.replace(/\//g, "-");
  calendar.setAttribute("min", calendarMin);
  calendar.setAttribute("max", calendarMax);
  calendar.setAttribute("value", currentDate.replace(/\//g, "-"));
}

function pageRender() {
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
    ["My Step Goal", "Average Step Goal", "Today's Steps", "Average Steps"],
    "Steps",
    [
      currentUser.dailyStepGoal,
      allUserData.calculateAverageStepGoal(),
      allUserActivity.findInfoForDate(currentUser.id, currentDate, "numSteps"),
      allUserActivity.allUserAveragesForDate(currentDate).steps,
    ],
    ["rgba(253, 221, 224, .2)"],
    ["rgb(253, 221, 224)"],
    "y",
    false
  );
  const weekStepChartData = allUserActivity.weeklyStepCountByDay(
    currentUser.id,
    weekStartDate
  );
  createSmallBarChart(
    "weekStepChart",
    weekStepChartData.dates,
    "Weekly Steps",
    weekStepChartData.count,
    ["rgba(215, 199, 255, .2)"],
    ["rgb(215, 199, 255)"]
  );
  const weekActiveChartData = allUserActivity.weeklyMinutesActiveByDay(
    currentUser.id,
    weekStartDate
  );
  createSmallBarChart(
    "weekMinutesActiveChart",
    weekActiveChartData.dates,
    "Weekly Activity",
    weekActiveChartData.count,
    ["rgba(255, 199, 211, .2)"],
    ["rgb(255, 199, 211)"]
  );
  const weekStairsChartData = allUserActivity.weeklyStairsClimbedByDay(
    currentUser.id,
    weekStartDate
  );
  createSmallBarChart(
    "weekStairChart",
    weekStairsChartData.dates,
    "Weekly Stairs",
    weekStairsChartData.count,
    ["rgba(199, 239, 255, .2)"],
    ["rgb(199, 239, 255)"]
  );
}
function submitFormHandler(event) {
  event.preventDefault();
  if (
    !stepsInput.value ||
    !activityInput.value ||
    !stairsInput.value ||
    !sleepHoursInput.value ||
    !sleepQualityInput.value ||
    !hydrationInput.value
  ) {
    submitErrorMessage.innerHTML = `
    <div class="submitErrorMessage"> 
      <p><strong>Please Fill Out All Inputs</strong></p>
    </div>`;
    return;
  }
  if (!allUserHydro) {
    submitErrorMessage.innerHTML = `
    <div class="submitErrorMessage"> 
      <p><strong>Data failed to load: unable to post new data</strong></p>
    </div>`;
    return;
   }
  if (
    userDataForDate(
      allUserHydro.data,
      currentUser.id,
      dayjs().format("YYYY/MM/DD")
    ) ||
    userDataForDate(
      allUserSleep.sleepData,
      currentUser.id,
      dayjs().format("YYYY/MM/DD")
    ) ||
    userDataForDate(
      allUserActivity.data,
      currentUser.id,
      dayjs().format("YYYY/MM/DD")
    )
  ) {
    submitErrorMessage.innerHTML = `
    <div class="submitErrorMessage"> 
      <p><strong>Data already exists for this day</strong></p>
    </div>`;
    return;
  }
  postData(
    {
      userID: currentUser.id,
      date: dayjs().format("YYYY/MM/DD"),
      hoursSlept: +sleepHoursInput.value,
      sleepQuality: +sleepQualityInput.value,
    },
    {
      userID: currentUser.id,
      date: dayjs().format("YYYY/MM/DD"),
      numOunces: +hydrationInput.value,
    },
    {
      userID: currentUser.id,
      date: dayjs().format("YYYY/MM/DD"),
      flightsOfStairs: +stairsInput.value,
      minutesActive: +activityInput.value,
      numSteps: +stepsInput.value,
    },
    updateDataModel,
    pageRender,
    currentUser,
    clearInputs,
  ).catch((error) => {
    submitErrorMessage.innerHTML = `
      <div class="submitErrorMessage"> 
        <p><strong>${error.message}</strong></p>
      </div>`;
  });
  
}

const displayUserName = function (user) {
  userNameLogo.innerHTML = `
  <h1 class="user-name" id="userName">Welcome, ${user.getFirstName()}!</h1>
  <img src="./images/fitlit_logo_h.png" alt="FitLit Logo" width="30%" />`;
};

const displayUserInfo = function (user, repository) {
  userDisplay.innerHTML = `
  <div class="user-card">
    <p class="id"><strong>User ID:</strong> ${user.id}</p>
    <p class="name"><strong>Name:</strong> ${user.name}</p>
    <p class="address"><strong>Address:</strong> ${user.address}</p>
    <p class="email"><strong>Email:</strong> ${user.email}</p>
    <p class="daily-step-goal"><strong>Step Goal:</strong> ${
      user.dailyStepGoal
    }</p>
    <p class="daily-miles-walked"><strong>Today's miles:</strong> ${allUserActivity.calculateMilesForDate(
      user.id,
      currentDate,
      user.strideLength
    )} miles</p>
    <p class="stride-length"><strong>Stride Length:</strong> ${
      user.strideLength
    } feet</p>
    <p class="minutes-active-daily-allusers"><strong>Average Minutes Active for All Users:</strong> ${
      allUserActivity.allUserAveragesForDate(currentDate).minutesActive
    } mins</p>
    <p class="flights-daily-allusers"><strong> Average Flights of Stairs for All Users:</strong> ${
      allUserActivity.allUserAveragesForDate(currentDate).stairs
    } flights</p>
    <p class="friends"><strong>Friends:</strong> ${repository.getFriendData(
      user.friends
    )}</p>
  </div>`;
};

const displayCurrentDayHydration = function (hydration, date) {
  hydrationBox.innerHTML = `
  <i class="fa-regular fa-glass fa-2xl"></i>
  <p>Today's Water: ${hydration.consumeBydate(currentUser.id, date)} oz</p>`;
};

function formatDates(array) {
  return array.map((user) => {
    return {
      ...user,
      date: dayjs(user.date).format("YYYY/MM/DD"),
    };
  });
}

function currentDateForUser() {
  const hydroData = userDataForID(currentUser.id, allUserHydro.data).slice(
    -1
  )[0].date;
  const sleepData = userDataForID(currentUser.id, allUserSleep.sleepData).slice(
    -1
  )[0].date;
  const activityData = userDataForID(
    currentUser.id,
    allUserActivity.data
  ).slice(-1)[0].date;
  const mostCurrent = [hydroData, sleepData, activityData].sort((low, high) =>
    dayjs(low).diff(dayjs(high))
  );
  return mostCurrent[mostCurrent.length - 1];
}

function clearInputs() {
  stepsInput.value = ""
  stairsInput.value = ""
  activityInput.value = ""
  sleepQualityInput.value = ""
  sleepHoursInput.value = ""
  hydrationInput.value = ""
}